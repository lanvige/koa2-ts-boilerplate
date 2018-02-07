import { BaseEntity } from './baseEntity';
import { User } from '../models/user';

export class UserEntity extends BaseEntity {
  private id: number;
  private name: string;
  private token: string;
  private created_at: Date;

  public constructor(user: User) {
    super();

    this.id = user.id;
    this.name = user.name;
    this.token = user.token;
    this.created_at = user.createdAt
  }
}
