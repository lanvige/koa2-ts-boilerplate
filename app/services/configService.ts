import { Service } from 'typedi';
import * as request from 'request-promise';
import config from '../../config/config';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm/repository/Repository';
import { Config } from '../models/config';
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
    const data = await this.configRepository.getConfig(key, fact);
    const value = await this.getConfigValue(data, fact);

    return { key, value };
  }

  async getConfigValue(config, fact) {
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
