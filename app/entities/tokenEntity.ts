import { BaseEntity } from './baseEntity';
import { User } from '../models/user';
import * as jwt from 'jsonwebtoken';

export class TokenEntity extends BaseEntity {
  private token: string;
  private auth_type: string;
  private token_type: string;

  public constructor(user: User) {
    super();

    // 用 jwt 来生成 token
    var token = jwt.sign({ id: user.id, token: user.token }, 'abcdefg');

    this.token = token;
    this.auth_type = 'bearer'
    this.token_type = 'jwt'
  }
}
