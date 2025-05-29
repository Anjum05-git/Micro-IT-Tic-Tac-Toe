import { Board, Player } from '../types/game';

// Winning combinations (rows, columns, diagonals)
export const WINNING_COMBINATIONS = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal top-left to bottom-right
  [2, 4, 6], // diagonal top-right to bottom-left
];

// Check if there's a winner
export const checkWinner = (board: Board): { winner: Player | null; winningLine: number[] | null } => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return {
        winner: board[a] as Player,
        winningLine: combination,
      };
    }
  }
  return { winner: null, winningLine: null };
};

// Check if the game is a draw
export const checkDraw = (board: Board): boolean => {
  return board.every((cell) => cell !== null);
};

// Get next player
export const getNextPlayer = (currentPlayer: Player): Player => {
  return currentPlayer === 'X' ? 'O' : 'X';
};

// Create a new empty board
export const createEmptyBoard = (): Board => {
  return Array(9).fill(null);
};