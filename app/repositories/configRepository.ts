import { EntityRepository, Repository, FindOneOptions } from 'typeorm';
import { Config } from '../models/config';
import { Fact } from '../models/fact';

@EntityRepository(Config)
export class ConfigRepository extends Repository<Config> {
  async getConfig(key: string, fact: Fact): Promise<any> {
    const cfg = {
      where: {
        key,
        app_id: fact.appId,
      },
    } as FindOneOptions<Config>;

    const data = await this.findOne(cfg);
    return data;
  }

  async getConfigs(): Promise<Config[]> {
    return this.find();
  }
}
