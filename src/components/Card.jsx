import "../styles/Card.css"

export function Card({ img, onClick }) {
  return (
    <div className="card-container" onClick={onClick}>
      <div className="card-wrapper">
        <img id="pokemonImage" src={img} alt="random images" />
      </div>
    </div>
  );
}
