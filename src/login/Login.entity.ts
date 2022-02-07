import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

@Entity({ name: 'users' })
export class Login extends BaseEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsEmail()
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
