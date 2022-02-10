import { Injectable } from '@nestjs/common';
import { ApplyEpass } from 'src/applyepass/ApplyEpass.entity';
import { getConnection } from 'typeorm';

@Injectable()
export class AdminService {
  async updatepass(id: string, option: string) {
    await getConnection()
      .createQueryBuilder()
      .update(ApplyEpass)
      .set({ status: option })
      .where('id = :id', { id: id })
      .execute();
  }
}
