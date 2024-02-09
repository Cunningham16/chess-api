import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Move } from './move.entity';
import { GAMESTATUS } from 'src/common/enums/game_status.enum';
import { Transform } from 'class-transformer';

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  type: string;

  @Column()
  status: GAMESTATUS;

  @OneToMany(() => Move, (move) => move.game)
  moves: Move[];

  @ManyToOne(() => UserEntity, { eager: true })
  @JoinColumn({ name: 'player_white' })
  @Transform(({ value }) => ({
    id: value.id,
    nickname: value.nickname,
  }))
  player_white: UserEntity;

  @ManyToOne(() => UserEntity, { eager: true })
  @JoinColumn({ name: 'player_black' })
  @Transform(({ value }) => ({
    id: value.id,
    nickname: value.nickname,
  }))
  player_black: UserEntity;

  @CreateDateColumn()
  createdAt: Date;
}
