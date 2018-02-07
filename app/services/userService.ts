import { Service } from 'typedi';
import config from '../../config/config';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm/repository/Repository';
import { User } from '../models/user';
import { Fact } from '../models/fact';
import { UserRepository } from '../repositories/userRepository';


@Service()
export class UserService {

  @OrmRepository(User)
  private userRepository: UserRepository;

  async getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  async getByName(name: string) : Promise<any> {
    const user = await this.userRepository.getByName(name);

    return user;
  }
}
