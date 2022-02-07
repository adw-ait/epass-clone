import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Location } from './Location.entity';
import { LocationsService } from './locations.service';

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
