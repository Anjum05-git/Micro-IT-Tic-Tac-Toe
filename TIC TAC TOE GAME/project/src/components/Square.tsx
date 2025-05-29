import React from 'react';
import { CellValue } from '../types/game';

interface SquareProps {
  value: CellValue;
  onClick: () => void;
  isWinningSquare: boolean;
  index: number;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare, index }) => {
  const animationDelay = `${index * 0.05}s`;

  return (
    <button
      className={`
        w-full aspect-square 
        text-4xl sm:text-5xl md:text-6xl font-bold 
        flex items-center justify-center
        rounded-md
        transition-all duration-300 ease-in-out
        ${value ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-white/20 dark:hover:bg-white/10'}
        ${isWinningSquare ? 'bg-emerald-300/90 dark:bg-emerald-700/90' : 'bg-white/80 dark:bg-gray-800/80'}
        ${value ? 'scale-100' : 'scale-95 hover:scale-100'}
        border-2 border-white/30 dark:border-white/10
        shadow-lg backdrop-blur-sm
      `}
      onClick={onClick}
      disabled={!!value}
      style={{ 
        animationDelay, 
        color: value === 'X' 
          ? 'rgb(168, 85, 247)' // purple-500
          : value === 'O' 
            ? 'rgb(20, 184, 166)' // teal-500
            : 'transparent'
      }}
      className={`${value ? (value === 'X' ? 'animate-pop-in' : 'animate-pop-in') : ''}`}
    >
      {value}
    </button>
  );
};

export default Square;