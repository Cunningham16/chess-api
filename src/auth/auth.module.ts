import { Module } from '@nestjs/common';
import { LoginService } from './services/login.service';
import { LogoutService } from './services/logout.service';
import { RegisterService } from './services/register.service';
import { AuthController } from './controllers/auth.controller';
import { UserModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '12h' },
    }),
  ],
  providers: [LoginService, LogoutService, RegisterService],
  controllers: [AuthController],
})
export class AuthModule {}
