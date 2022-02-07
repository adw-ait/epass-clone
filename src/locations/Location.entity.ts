import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import { IsString, MaxLength, MinLength } from 'class-validator';
import { Login } from 'src/login/Login.entity';

@Entity({ name: 'locations' })
export class Location extends BaseEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  name: string;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  address: string;

  @Column()
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  question: string;

  @Column()
  @IsString()
  peopleCount: string;

  @Column({ default: 'no' })
  @IsString()
  is_deleted: string;

  @ManyToOne(() => Login, (login) => login.id)
  userid: Login;
}
