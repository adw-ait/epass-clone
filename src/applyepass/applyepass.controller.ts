import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
import { ApplyEpass } from './ApplyEpass.entity';
import { ApplyepassService } from './applyepass.service';

@Controller()
export class ApplyepassController {
  constructor(
    private applyepassService: ApplyepassService,
    private configService: ConfigService,
  ) {}

  @Post('applyepass')
  addEpass(@Body() epass: ApplyEpass) {
    this.applyepassService.addEpass(epass);
  }

  @Get('viewepass/:id')
  async getEpass(@Param('id') id: string) {
    const data = {
      epassData: await this.applyepassService.getEpass(id),
      config: await this.configService.getConfig(),
    };
    return data;
  }
}
