import React from 'react';
import { GameState } from '../types/game';
import { X, Circle } from 'lucide-react';

interface StatusProps {
  gameState: GameState;
}

const Status: React.FC<StatusProps> = ({ gameState }) => {
  const { currentPlayer, winner } = gameState;

  return (
    <div className="text-center mb-6 animate-fade-in">
      {winner ? (
        <div className="flex flex-col items-center">
          {winner === 'DRAW' ? (
            <h2 className="text-2xl font-bold text-pink-500 dark:text-pink-400 mb-2">
              It's a Draw!
            </h2>
          ) : (
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-2">
                <span className={winner === 'X' ? 'text-purple-500' : 'text-teal-500'}>
                  Player {winner}
                </span>{' '}
                Wins!
              </h2>
              <div className="animate-bounce mt-2">
                {winner === 'X' ? (
                  <X size={40} className="text-purple-500" />
                ) : (
                  <Circle size={40} className="text-teal-500" />
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-white mb-2">
            Next Player:
          </h2>
          <div className="animate-pulse">
            {currentPlayer === 'X' ? (
              <X size={30} className="text-purple-500" />
            ) : (
              <Circle size={30} className="text-teal-500" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Status;