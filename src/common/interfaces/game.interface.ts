import { GAMESTATUS } from '../enums/game_status.enum';
import { User } from './user.interface';

export interface Game {
  id: number;
  type: string;
  status: GAMESTATUS;
  moves: string[];
  player_white: User;
  player_black: User;
  createdAt: Date;
}
