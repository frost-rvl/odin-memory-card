import { useEffect, useRef } from 'react';
import { Card } from './Card'
import { useState } from 'react';

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export function GameBoard({ score, setScore, bestScore, setBestScore, level, setLevel }) {
  const [pokemons, setPokemons] = useState([]);
  const cardNumber = useRef(5);
  const clickedCards = useRef(new Set);

  const fetchAll = async (count) => {
    const ids = new Set();
    while (ids.size < count) {
      ids.add(Math.floor(Math.random() * 500));
    }

    const promises = [...ids].map(pokemonId =>
      fetch(`${API_URL}/${pokemonId}`)
        .then(response => response.json())
        .then(data => ({ id: pokemonId, img: data.sprites.front_default }))
    );

    const results = await Promise.all(promises);
    setPokemons(results);
  };

  const shuffle = () => {
    setPokemons(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    fetchAll(cardNumber.current);
  }, []);

  const handleClick = (id) => {
    if (!clickedCards.current.has(id)) {
      clickedCards.current.add(id);
      setScore(score + 1);
      if (clickedCards.current.size == cardNumber.current) {
        setLevel(level + 1);
        cardNumber.current = level === 7 ? 30 : cardNumber.current + 5;
        clickedCards.current = new Set();
        fetchAll(cardNumber.current);
      }
      if (score + 1 > bestScore)
        setBestScore(score + 1);
      shuffle();
    }
    else {
      setScore(0);
      clickedCards.current = new Set();
      fetchAll(cardNumber.current);
    }
  };

  return (
    <div className='game-board'>{
      pokemons.map(pokemon =>
        <Card key={pokemon.id} img={pokemon.img} onClick={() => handleClick(pokemon.id)} />)}
    </div>
  );
}
