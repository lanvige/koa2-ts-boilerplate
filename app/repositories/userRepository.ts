import { EntityRepository, Repository, FindOneOptions } from 'typeorm';
import { User } from '../models/user';
import { Fact } from '../models/fact';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async getByName(name: string): Promise<any> {
    const cfg = {
      where: {
        name
      },
    } as FindOneOptions<User>;

    const user = await this.findOne(cfg);

    return user;
  }

  async getAll(): Promise<User[]> {
    return this.find();
  }
}
