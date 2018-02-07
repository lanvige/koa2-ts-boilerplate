import { Service } from 'typedi';
import config from '../../config/config';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm/repository/Repository';
import { User } from '../models/user';
import { UserRepository } from '../repositories/userRepository';


@Service()
export class AuthService {

  @OrmRepository(User)
  private userRepository: UserRepository;

  async register(name: string, password: string): Promise<User> {
    const user = await this.userRepository.register(name, password);
    return user
  }

  async login(name: string, password: string) : Promise<User> {
    const user = await this.userRepository.login(name, password);

    return user;
  }

  async wxlogin(name: string, password: string) : Promise<User> {
    const user = await this.userRepository.getByName(name);

    return user;
  }
}
