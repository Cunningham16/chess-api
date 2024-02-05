import { ROLES } from 'src/common/enums/roles.enum';
import { Game } from 'src/game/entities/game.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column()
  role: ROLES;

  @Column({ nullable: true })
  avatar: string;

  @Column()
  score: number;

  @OneToMany(() => Game, (game) => game.player_white)
  whiteGames: Game[];

  @OneToMany(() => Game, (game) => game.player_black)
  blackGames: Game[];
}
