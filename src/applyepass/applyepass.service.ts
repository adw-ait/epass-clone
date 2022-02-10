import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Repository } from 'typeorm';
import { ApplyEpass } from './ApplyEpass.entity';

@UseGuards(JwtAuthGuard)
@Injectable()
export class ApplyepassService {
  constructor(
    @InjectRepository(ApplyEpass)
    private applyEpassRepository: Repository<ApplyEpass>,
  ) {}

  async addEpass(epass: ApplyEpass) {
    await this.applyEpassRepository.save(epass);
  }

  async getEpass(id: string): Promise<ApplyEpass[]> {
    return await this.applyEpassRepository.find({
      where: { userid: id },
      relations: ['userid', 'locationid'],
    });
  }

  async getAllEpass(): Promise<ApplyEpass[]> {
    return await this.applyEpassRepository.find();
  }
}
