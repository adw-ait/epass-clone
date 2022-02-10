import { Module } from '@nestjs/common';
import { LocationsModule } from './locations/locations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplyepassModule } from './applyepass/applyepass.module';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LocationsModule,
    ApplyepassModule,
    ConfigModule,
    AuthModule,
  ],
})
export class AppModule {}
