import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ConfigService } from 'src/config/config.service';
import { ApplyEpass } from './ApplyEpass.entity';
import { ApplyepassService } from './applyepass.service';

@UseGuards(JwtAuthGuard)
@Controller('applyepass')
export class ApplyepassController {
  constructor(
    private applyepassService: ApplyepassService,
    private configService: ConfigService,
  ) {}

  @Get()
  async getConfig(){
    return await this.configService.getConfig()
  }

  @Post('requestepass')
  addEpass(@Body() epass: ApplyEpass) {
    this.applyepassService.addEpass(epass);
    return "applied for epass successfully"
  }

  @Get('viewepass/:id')
  async getEpass(@Param('id') id: string) {
   
    return await this.applyepassService.getEpass(id);
  }

  @Get('viewallepass')
  async getAllEpass() {
    return this.applyepassService.getAllEpass();
  }
}
