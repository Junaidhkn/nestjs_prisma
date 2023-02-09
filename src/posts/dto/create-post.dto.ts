import { MinLength, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  title: string;

  @MinLength(4)
  @IsString()
  @IsNotEmpty()
  body: string;

  authorId: string;
}
