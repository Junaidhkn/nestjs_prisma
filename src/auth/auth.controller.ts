import { Controller, Post, Request, Body } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authServeice: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authServeice.registerUser(createUserDto);
  }
}
