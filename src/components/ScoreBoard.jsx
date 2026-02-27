export function ScoreBoard({ score, bestScore, level }) {
  return (
    <div className="score-board">
      <p>Level : <span className="score">{level}</span></p>
      <p>Score : <span className="score">{score}</span></p>
      <p>Best score: <span className="score">{bestScore}</span></p>
    </div>
  );
}
