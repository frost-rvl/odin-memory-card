import { ScoreBoard } from './components/ScoreBoard';
import { Title } from './components/Title';
import { GameBoard } from './components/GameBoard';
import './App.css'
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);

  return (
    <>
      <div className='game-bar'>
        <Title />
        <ScoreBoard score={score} bestScore={bestScore} level={level} />
      </div>
      <GameBoard score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore} level={level} setLevel={setLevel} />
    </>
  )
}

export default App
