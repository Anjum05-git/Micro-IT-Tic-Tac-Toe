import React from 'react';
import Game from './components/Game';
import { Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8">
          <Game />
        </div>
        
        <footer className="mt-8 text-center text-sm text-white">
          <div className="flex justify-center items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-purple-400 transition-colors"
            >
              <Github size={16} />
              <span>View on GitHub</span>
            </a>
          </div>
          <p className="mt-2">© {new Date().getFullYear()} Tic Tac Toe Game</p>
        </footer>
      </div>
    </div>
  );
}

export default App;