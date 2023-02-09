import { MinLength } from 'class-validator';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator/types/decorator/decorators';

export class CreateUserDto {
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
  //   posts: string[];
}
