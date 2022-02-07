import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from './Config.entity';
import { ConfigService } from './config.service';

@Module({
  imports: [TypeOrmModule.forFeature([Config])],
  providers: [ConfigService],
})
export class ConfigModule {}
