import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm';
import { IsString, MaxLength, MinLength } from 'class-validator';

@Entity({ name: 'users' })
export class Auth extends BaseEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  email: string;

  @Column()
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  password: string;

  @Column()
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  name: string;
}
