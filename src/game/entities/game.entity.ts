import { User } from 'src/users/entities/user.entity';
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

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'player_white_id' })
  player_white: User;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'player_black_id' })
  player_black: User;

  @CreateDateColumn()
  createdAt: Date;
}
