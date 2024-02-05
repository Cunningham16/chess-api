import { ROLES } from '../enums/roles.enum';

export interface User {
  id: number;
  email: string;
  password: string;
  nickname: string;
  role: ROLES;
  avatar: string;
  score: number;
  whiteGames: string;
  blackGames: string;
}
