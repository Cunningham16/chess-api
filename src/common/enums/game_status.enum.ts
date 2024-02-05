//Это описание всевозможных статусов игры, если изменяешь - будь аккуратен

export enum GAMESTATUS {
  CHECKMATE = 'checkmate',
  DRAW = 'draw',
  INSUFFITIENT_MATERIAL = 'insuffitient material',
  THREEFOLD_REPETITION = 'threefold repetition',
  IN_PROGRESS = 'in progress',
}
