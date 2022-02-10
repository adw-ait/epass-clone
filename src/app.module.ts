import { Module } from '@nestjs/common';
import { LocationsModule } from './locations/locations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplyepassModule } from './applyepass/applyepass.module';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LocationsModule,
    ApplyepassModule,
    ConfigModule,
    AuthModule,
    AdminModule,
  ],
})
export class AppModule {}
