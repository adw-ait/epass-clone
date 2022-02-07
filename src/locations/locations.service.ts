import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './Location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  async addLocation(location: Location) {
    await this.locationRepository.save(location);
  }

  async getLocation(id: string): Promise<Location[]> {
    return await this.locationRepository.find({
      where: { userid: id },
      relations: ['userid'],
    });
  }

  async remove(id: string): Promise<void> {
    await this.locationRepository.delete(id);
  }
}
