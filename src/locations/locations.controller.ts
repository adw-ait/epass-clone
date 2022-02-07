import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Location } from './Location.entity';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private locationService: LocationsService) {}

  @Post()
  addLocation(@Body() location: Location) {
    this.locationService.addLocation(location);
  }

  @Get(':id')
  getLocation(@Param('id') id: string) {
    return this.locationService.getLocation(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.locationService.remove(id);
  }
}
