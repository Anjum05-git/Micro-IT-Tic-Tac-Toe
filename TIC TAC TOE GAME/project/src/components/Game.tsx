import React, { useState, useEffect } from 'react';
import Board from './Board';
import Status from './Status';
import ResetButton from './ResetButton';
import GameHistory from './GameHistory';
import { GameState, Player } from '../types/game';
import { checkWinner, checkDraw, getNextPlayer, createEmptyBoard } from '../utils/gameLogic';
import { Sparkles } from 'lucide-react';

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    board: createEmptyBoard(),
    currentPlayer: 'X',
    winner: null,
    winningLine: null,
    history: {
      x: 0,
      o: 0,
      draws: 0,
    },
  });

  // Check for winner or draw after each move
  useEffect(() => {
    const { board, winner } = gameState;
    
    // If there's already a winner, no need to check again
    if (winner) return;
    
    const { winner: newWinner, winningLine } = checkWinner(board);
    
    if (newWinner) {
      // Update game history
      setGameState((prevState) => ({
        ...prevState,
        winner: newWinner,
        winningLine,
        history: {
          ...prevState.history,
          [newWinner.toLowerCase()]: prevState.history[newWinner.toLowerCase() as 'x' | 'o'] + 1,
        },
      }));
    } else if (checkDraw(board)) {
      // It's a draw
      setGameState((prevState) => ({
        ...prevState,
        winner: 'DRAW',
        history: {
          ...prevState.history,
          draws: prevState.history.draws + 1,
        },
      }));
    }
  }, [gameState.board, gameState.winner]);

  // Handle square click
  const handleSquareClick = (index: number) => {
    const { board, currentPlayer, winner } = gameState;
    
    // If there's a winner or the square is already filled, do nothing
    if (winner || board[index]) return;
    
    // Update the board with the current player's mark
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    
    // Update game state with new board and next player
    setGameState((prevState) => ({
      ...prevState,
      board: newBoard,
      currentPlayer: getNextPlayer(currentPlayer),
    }));
  };

  // Reset the game
  const resetGame = () => {
    setGameState((prevState) => ({
      ...prevState,
      board: createEmptyBoard(),
      currentPlayer: 'X',
      winner: null,
      winningLine: null,
    }));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto px-4">
      <div className="mb-4 flex items-center gap-2">
        <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400">
          Tic Tac Toe
        </h1>
        <Sparkles className="text-amber-500" />
      </div>
      
      <Status gameState={gameState} />
      
      <Board 
        board={gameState.board} 
        onClick={handleSquareClick}
        winningLine={gameState.winningLine}
      />
      
      <ResetButton 
        onClick={resetGame} 
        gameOver={!!gameState.winner}
      />
      
      <GameHistory gameState={gameState} />
    </div>
  );
};

export default Game;