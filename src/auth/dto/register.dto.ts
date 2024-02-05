import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ROLES } from 'src/common/enums/roles.enum';

export class RegisterDto {
  @IsString()
  @MinLength(5, {
    message: 'Nickname is too short',
  })
  nickname: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, {
    message: 'Password is too short',
  })
  password: string;

  @IsOptional()
  @IsString()
  avatar: string;

  @IsEnum(ROLES)
  role: ROLES;
}
