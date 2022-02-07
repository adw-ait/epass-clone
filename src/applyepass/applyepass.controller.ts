import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApplyEpass } from './ApplyEpass.entity';
import { ApplyepassService } from './applyepass.service';

@Controller('applyepass')
export class ApplyepassController {
  constructor(private applyepassService: ApplyepassService) {}

  @Post()
  addEpass(@Body() epass: ApplyEpass) {
    this.applyepassService.addEpass(epass);
  }

  @Get(':id')
  getEpass(@Param('id') id: string) {
    return this.applyepassService.getEpass(id);
  }
}
