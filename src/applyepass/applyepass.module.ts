import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from 'src/config/Config.entity';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';

import { ApplyepassController } from './applyepass.controller';
import { ApplyEpass } from './ApplyEpass.entity';
import { ApplyepassService } from './applyepass.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ApplyEpass]),
    TypeOrmModule.forFeature([Config]),
  ],
  controllers: [ApplyepassController],
  providers: [ApplyepassService, ConfigService],
})
export class ApplyepassModule {}
