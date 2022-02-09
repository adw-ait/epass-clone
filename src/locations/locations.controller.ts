import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Location } from './Location.entity';
import { LocationsService } from './locations.service';

@UseGuards(JwtAuthGuard)
@Controller()
export class LocationsController {
  constructor(private locationService: LocationsService) {}

  @Post('addlocation')
  addLocation(@Body() location: Location) {
    this.locationService.addLocation(location);
  }

  @Get('viewlocation/:id')
  getLocation(@Param('id') id: string) {
    return this.locationService.getLocation(id);
  }

  @Post('deletelocation/:id')
  remove(@Param('id') id: string) {
    this.locationService.remove(id);
  }
}
