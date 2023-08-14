import React from 'react';
import Pokecard from './Pokecard';

function Pokedex({ pokemon }) {
  return (
    <div className="Pokedex">
      {pokemon.map(p => <Pokecard key={p.id} {...p} />)}
    </div>
  );
}

export default Pokedex;
