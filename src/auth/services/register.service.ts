import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ROLES } from 'src/common/enums/roles.enum';
import { UsersService } from 'src/users/service/users.service';
import { hash } from 'bcrypt';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class RegisterService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async register(
    nickname: string,
    email: string,
    pass: string,
    role: string,
  ): Promise<{ user: UserEntity; access_token: string }> {
    const foundUserByNickname =
      await this.usersService.findOneByNickname(nickname);
    if (foundUserByNickname) {
      throw new UnauthorizedException();
    }
    const foundUserByEmail = await this.usersService.findOneByEmail(email);
    if (foundUserByEmail) {
      throw new UnauthorizedException();
    }
    if (role !== ROLES.USER && role !== ROLES.ADMIN) {
      throw new UnauthorizedException();
    }

    const hashPassword = await hash(pass, 10);
    const newUser = await this.usersService.createUser(
      nickname,
      email,
      hashPassword,
      null,
      role,
    );

    const payload = {
      id: newUser.id,
      email: newUser.email,
      nickname: newUser.nickname,
      password: newUser.password,
    };

    const token = await this.jwtService.signAsync(payload, {
      privateKey: process.env.JWT_SECRET_KEY,
    });

    return {
      user: newUser,
      access_token: token,
    };
  }
}
