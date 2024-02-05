import { Game } from 'src/game/entities/game.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TypeGame {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  time: number; //Указывается в минутах

  @OneToMany(() => Game, (game) => game.type)
  games: Game[];
}
