import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { StringUtils } from '../../utils/stringUtils';

@Entity({ name: 'configs' })
export class Config {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  @Column()
  default: string;

  @Column({ length: 2000 })
  value: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
