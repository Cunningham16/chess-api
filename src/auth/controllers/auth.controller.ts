import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { LoginService } from '../services/login.service';
import { LogoutService } from '../services/logout.service';
import { RegisterService } from '../services/register.service';
import { AuthGuard } from '../guards/auth.guard';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private loginService: LoginService,
    private logoutService: LogoutService,
    private registerService: RegisterService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.registerService.register(
      registerDto.nickname,
      registerDto.email,
      registerDto.password,
      registerDto.role,
    );
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() loginDto: LoginDto) {
    return this.loginService.login(loginDto.email, loginDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
