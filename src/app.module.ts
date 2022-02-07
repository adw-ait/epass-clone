import { Module } from '@nestjs/common';
import { LocationsModule } from './locations/locations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplyepassModule } from './applyepass/applyepass.module';
import { LoginModule } from './login/login.module';
// import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LocationsModule,
    ApplyepassModule,
    LoginModule,
  ],
})
export class AppModule {}
