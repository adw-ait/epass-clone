import { BaseEntity, Column, Entity, Generated, PrimaryColumn } from 'typeorm';

import { IsString } from 'class-validator';

@Entity({ name: 'config' })
export class Config extends BaseEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column()
  @IsString()
  passtype: string;

  @Column()
  @IsString()
  transport: string;

  @Column()
  @IsString()
  priority: string;

  @Column()
  @IsString()
  reasons: string;
}
