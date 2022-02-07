import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplyepassController } from './applyepass.controller';
import { ApplyEpass } from './ApplyEpass.entity';
import { ApplyepassService } from './applyepass.service';

@Module({
  imports: [TypeOrmModule.forFeature([ApplyEpass])],
  controllers: [ApplyepassController],
  providers: [ApplyepassService],
})
export class ApplyepassModule {}
