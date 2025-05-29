import React from 'react';
import { RotateCcw } from 'lucide-react';

interface ResetButtonProps {
  onClick: () => void;
  gameOver: boolean;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick, gameOver }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2
        px-4 py-2 mt-4
        font-medium rounded-full
        transition-all duration-300
        ${
          gameOver
            ? 'bg-indigo-500 hover:bg-indigo-600 text-white scale-100'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-700 scale-95'
        }
        hover:scale-105
        shadow-md
      `}
    >
      <RotateCcw size={16} />
      {gameOver ? 'Play Again' : 'Reset Game'}
    </button>
  );
};

export default ResetButton;