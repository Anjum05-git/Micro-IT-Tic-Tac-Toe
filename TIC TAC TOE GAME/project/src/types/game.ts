export type Player = 'X' | 'O';
export type CellValue = Player | null;
export type Board = CellValue[];

export interface GameState {
  board: Board;
  currentPlayer: Player;
  winner: Player | 'DRAW' | null;
  winningLine: number[] | null;
  history: {
    x: number;
    o: number;
    draws: number;
  };
}