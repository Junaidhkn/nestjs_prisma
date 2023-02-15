import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  private usersService: UsersService;
  constructor(private moduleRef: ModuleRef) {
    this.usersService = this.moduleRef.get(UsersService, { strict: false });
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return new UnauthorizedException();
  }
  registerUser(createUserDto: CreateUserDto) {}
}
