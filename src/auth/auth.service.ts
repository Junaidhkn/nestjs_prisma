import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  validateUser(email: string, password: string) {}
  registerUser(createUserDto: CreateUserDto) {}
}
