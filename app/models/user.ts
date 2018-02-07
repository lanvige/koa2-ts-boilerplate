import { Column, Entity, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { StringUtils } from '../../utils/stringUtils';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // 这个是必要的吗？
  @Column({ default: 'null@null.com' })
  email: string;

  // 手机号是必要的吗？
  @Column({ default: '' })
  phone: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ name: 'state', default: 1 })
  state: number;

  @Column()
  token: string;

  @Column({ default: 'default' })
  scope: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'deleted_at' })
  deletedAt: Date;
}
