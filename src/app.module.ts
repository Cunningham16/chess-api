import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { GameModule } from './game/game.module';
import { TypeGameModule } from './type-game/type-game.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '7666ivan',
      database: 'chess-api',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    CommonModule,
    GameModule,
    TypeGameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
