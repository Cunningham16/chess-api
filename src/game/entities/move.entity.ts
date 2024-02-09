import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from './game.entity';
import { Transform } from 'class-transformer';

@Entity()
export class Move {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  from: string;

  @Column()
  to: string;

  @ManyToOne(() => Game, (game) => game.moves)
  @Transform(({ value }) => value.id)
  game: Game;
}
