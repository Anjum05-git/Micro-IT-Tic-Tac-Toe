import React from 'react';
import Square from './Square';
import { Board as BoardType } from '../types/game';

interface BoardProps {
  board: BoardType;
  onClick: (index: number) => void;
  winningLine: number[] | null;
}

const Board: React.FC<BoardProps> = ({ board, onClick, winningLine }) => {
  const renderSquare = (index: number) => {
    const isWinningSquare = winningLine?.includes(index) || false;
    
    return (
      <Square
        key={index}
        value={board[index]}
        onClick={() => onClick(index)}
        isWinningSquare={isWinningSquare}
        index={index}
      />
    );
  };

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      {board.map((_, index) => renderSquare(index))}
    </div>
  );
};

export default Board;