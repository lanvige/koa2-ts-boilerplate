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
import { Client } from '../models/client';

@Service()
export class AppService {

  @OrmRepository(Client)
  private appRepository: Repository<Client>;

  async getApplicationInfo(packageName: string) : Promise<Client> {
    return this.appRepository.findOne({
      where:'name LIKE "%' + packageName + '%"',
    });
  }
}
