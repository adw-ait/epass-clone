import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
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

  async createUser(username: string) {
    await this.authRepository.insert({
      email: username,
      name: username,
    });
  }

  async validateUser(username: string, password: string): Promise<any> {
    const verifyEmail = username.split('@');
    console.log(verifyEmail);

    if (verifyEmail[1] === 'leftrightmind.com') {
      const [user] = await this.getUser(username);
      if (!user) {
        // CREATE USER
        await this.createUser(username);
        const [newUser] = await this.getUser(username);
        return newUser;
      }
      // RETURN USER
      // ALREADY EXISTS
      const newUser = { email: user.email, id: user.id };
      return newUser;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    console.log(payload);

    return {
      access_token: this.jwtService.sign(payload),
      usernme: payload.username,
      id: payload.sub,
    };
  }
}
