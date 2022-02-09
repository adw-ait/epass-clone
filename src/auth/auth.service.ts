import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

import { Repository } from 'typeorm';
import { Auth } from './Auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
  ) {}

  async getUser(username: string): Promise<any> {
    return await this.authRepository.find({
      where: { email: username },
    });
  }

  async createUser(username: string, password: string) {
    await this.authRepository.insert({
      email: username,
      password: password,
      name: username,
    });
  }

  async validateUser(username: string, password: string): Promise<any> {
    const verifyEmail = username.split('@');

    if (verifyEmail[1] === 'leftrightmind.com') {
      const [user] = await this.getUser(username);
      if (!user) {
        // CREATE USER

        const hashedPassword = await bcrypt.hash(password, 12);
        await this.createUser(username, hashedPassword);
        const [newUser] = await this.getUser(username);
        return newUser;
      }
      // RETURN USER
      // ALREADY EXISTS
      if (!(await bcrypt.compare(password, user.password))) {
        return null;
      } else {
        const newUser = { email: user.email, id: user.id };
        return newUser;
      }
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    console.log(payload);

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
