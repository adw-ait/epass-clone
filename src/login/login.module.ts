import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login.controller';
import { Login } from './Login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Login])],
  controllers: [LoginController],
})
export class LoginModule {}
