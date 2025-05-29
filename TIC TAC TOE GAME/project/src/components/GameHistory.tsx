import React from 'react';
import { GameState } from '../types/game';
import { Trophy, CircleEqual, X, Circle } from 'lucide-react';

interface GameHistoryProps {
  gameState: GameState;
}

const GameHistory: React.FC<GameHistoryProps> = ({ gameState }) => {
  const { history } = gameState;
  const totalGames = history.x + history.o + history.draws;

  return (
    <div className="mt-8 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
        <Trophy size={18} className="text-yellow-400" />
        Game History
      </h3>
      
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="flex flex-col items-center p-2 bg-purple-100 dark:bg-purple-900/30 rounded-md">
          <X size={24} className="text-purple-500" />
          <p className="text-sm text-gray-600 dark:text-gray-400">Wins</p>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{history.x}</p>
        </div>
        
        <div className="flex flex-col items-center p-2 bg-teal-100 dark:bg-teal-900/30 rounded-md">
          <Circle size={24} className="text-teal-500" />
          <p className="text-sm text-gray-600 dark:text-gray-400">Wins</p>
          <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">{history.o}</p>
        </div>
        
        <div className="flex flex-col items-center p-2 bg-gray-100 dark:bg-gray-700 rounded-md">
          <CircleEqual size={24} className="text-pink-500" />
          <p className="text-sm text-gray-600 dark:text-gray-400">Draws</p>
          <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">{history.draws}</p>
        </div>
      </div>
      
      {totalGames > 0 && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center">
          Total games played: {totalGames}
        </p>
      )}
    </div>
  );
};

export default GameHistory;