import { Service } from 'typedi';
import * as request from 'request-promise';
import config from '../../config/config';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm/repository/Repository';
import { Config } from '../models/config';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { Fact } from '../models/fact';
import * as RuleEngine from 'node-rules';
import { ConfigRepository } from '../repositories/configRepository';

@Service()
export class ConfigService {

  @OrmRepository(Config)
  private configRepository: ConfigRepository;

  async getConfigs() : Promise<Config[]> {
    return this.configRepository.getConfigs();
  }

  async getConfig(key: string, fact: Fact) : Promise<any> {
    // const cfg = {
    //   where: {
    //     key,
    //     app_id: fact.appId,
    //   },
    //   // relations: ['rule'],
    //   // join: {
    //   //   alias: 'rules',
    //   //   innerJoinAndSelect: {
    //   //     author: 'photo.author',
    //   //     categories: 'categories',
    //   //     user: 'categories.user',
    //   //     profile: 'user.profile',
    //   //   },
    //   // },
    // } as FindOneOptions<Config>;
    // const data = await this.configRepository.findOne(cfg);
    // const value = await this.getConfigValue(data, fact);
    // return { key, value };

    const data = await this.configRepository.getConfig(key, fact);
    const value = await this.getConfigValue(data, fact);
    return { key, value };
  }

  async getConfigValue(config, fact) {
    // const ruleString = '[' +
    //   '{' +
    //   '"condition": function (R) {this.result = false;R.when(this.version.gte(new Versioning("2.0.1")) && this.version.lt(new Versioning("99.99.99")) ); },' +
    //   '"consequence": function (R) {this.result = true;R.stop(); } ,' +
    //   '"priority": 1' +
    //   '},' +
    //   '{' +
    //   '"condition": function (R) {this.result = false;R.when(this.version.gte(new Versioning("2.0.1")) && this.version.lt(new Versioning("99.99.99")) ); },' +
    //   '"consequence": function (R) {this.result = true;R.stop(); } ,' +
    //   '"priority": 1' +
    //   '}' +
    //   ']';
    let rules;
    if (config.Rules && config.Rules.length > 0 && config.rules) {
      /* tslint:disable */ rules = eval(config.rules); /* tslint:enable */
    }
    if (!rules) {
      rules = [];
    }
    try {
      const R = new RuleEngine(rules);
      // Now pass the fact on to the rule engine for results
      const val = await new Promise((fulfill) => {
        R.execute(fact, (result) => {
          const tmp = {};
          try {
            tmp[config.key] = result.result ? config.Rules[0].value : config.default;
          } catch (e) {
            tmp[config.key] = config.default;
          }
          fulfill(tmp);
        });
      });
      return val;
    } catch (e) {
      return config.default;
    }
  }
}
