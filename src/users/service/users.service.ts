import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ROLES } from 'src/common/enums/roles.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOneByNickname(nickname: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOneBy({ nickname });
    if (user!) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOneBy({ email });
    if (user!) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async createUser(
    nickname: string,
    email: string,
    password: string,
    avatar: string | null,
    role: ROLES,
  ): Promise<User> {
    const newUser = this.usersRepository.create({
      email,
      password,
      nickname,
      role,
      avatar: avatar,
      score: 10,
    });
    return newUser;
  }
}
