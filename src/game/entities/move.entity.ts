import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Move {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  notation: string;

  @Column()
  withPositions: {
    from: string;
    to: string;
  };

  @ManyToOne(() => Game, (game) => game.moves)
  game: Game;
}
