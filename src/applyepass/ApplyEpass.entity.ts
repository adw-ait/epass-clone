import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { IsString, MinLength } from 'class-validator';
import { Location } from 'src/locations/Location.entity';
import { Auth } from 'src/auth/Auth.entity';

@Entity({ name: 'applyepass' })
export class ApplyEpass extends BaseEntity {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column()
  @MinLength(1)
  @IsString()
  passtype: string;

  @Column()
  @MinLength(1)
  @IsString()
  phone: string;

  @ManyToOne(() => Location, (locationid) => locationid.id)
  locationid: Location;

  @Column()
  @MinLength(1)
  @IsString()
  reasonselect: string;

  @Column()
  @MinLength(1)
  @IsString()
  transport: string;

  @Column()
  @MinLength(1)
  @IsString()
  priority: string;

  @Column()
  @MinLength(1)
  @IsString()
  reason: string;

  @Column()
  @MinLength(1)
  @IsString()
  additionalinfo: string;

  @Column()
  @MinLength(1)
  @IsString()
  dates: string;

  @Column({ default: 'pending' })
  @MinLength(1)
  @IsString()
  status: string;

  @ManyToOne(() => Auth, (auth) => auth.id)
  userid: Auth;
}
