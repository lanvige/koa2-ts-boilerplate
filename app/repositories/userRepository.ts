import { EntityRepository, Repository, FindOneOptions } from 'typeorm';
import { User } from '../models/user';
import { Fact } from '../models/fact';
import * as crypto from 'crypto'


@EntityRepository(User)
export class UserRepository extends Repository<User> {

  async register(name: string, password: string): Promise<any> {

    // Generator salt passwordHash and token
    const salt = crypto.randomBytes(10).toString('hex');
    const token = crypto.randomBytes(20).toString('hex');

    const passwordHash = crypto.createHmac('sha256', password + salt);;

    const user = new User();
    // const user = this.create(); // same as const user = new User();
    user.name = name;
    user.password = passwordHash.digest('hex');
    user.salt = salt;
    user.token = token;
    user.state = 1;

    const userResult = await this.save(user);

    return user
  }

  async login(name: string, password: string): Promise<any> {
    const cfg = {
      where: {
        name
      },
    } as FindOneOptions<User>;

    const user = await this.findOne(cfg);

    const passwordHash = crypto.createHmac('sha256', password + user.salt).digest('hex');

    if (passwordHash == user.password) {
      return user
    } else {
      // Throw new Error
      return null
    }
  }

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
