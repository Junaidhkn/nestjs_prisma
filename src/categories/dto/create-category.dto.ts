import {
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator/types/decorator/decorators';

export class CreateCategoryDto {
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  name: string;
}
