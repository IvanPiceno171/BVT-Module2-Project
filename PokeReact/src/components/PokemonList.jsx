import React from 'react';
import { useQuery } from 'react-query';
import PokeCards from './PokeCards';

export default function PokemonList() {
  const fetchPokemon = async (x) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
    const data = await response.json();

    const pokemon = {
      name: data.name,
      id: data.id,
      image: data.sprites.front_default,
    };

    return pokemon;
  };

  const { data: allPokemon, error, isLoading } = useQuery('pokemonList', async () => {
    const pokemonList = [];
    for (let x = 1; x <= 151; x++) {
      const pokemon = await fetchPokemon(x);
      pokemonList.push(pokemon);
    }
    return pokemonList;
});

if (isLoading) {
    return <div>Loading...</div>;
}

if (error) {
    return <div>Error: {error.message}</div>;
}
  return (
    <div>
        <div id="container1" className="pokemon">
 
      {/* Render your Pokemon list using allPokemon */}
      {allPokemon.map((pokemon) => (
          <PokeCards key={pokemon.id} pokemon={pokemon} />
          ))}
          </div>


    </div>
  );
}
