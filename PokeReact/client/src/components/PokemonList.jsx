import React, { useState } from "react";
import { useQuery } from "react-query";
import PokeCards from "./PokeCards";

export default function PokemonList() {

  const fetchPokemon = async (x) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
    const data = await response.json();

    const pokemon = {
      name: data.name,
      id: data.id,
      image: data.sprites.front_default,
      abilities: data.abilities,
      // types: data.types,
      types: data.types.map((typeObj) => typeObj.type.name),
    };

    // console.log(pokemon)
    return pokemon;
  };

  const {
    data: allPokemon,
    error,
    isLoading,
  } = useQuery("pokemonList", async () => {
    const pokemonList = [];
    for (let x = 1; x <= 151; x++) {
      const pokemon = await fetchPokemon(x);
      pokemonList.push(pokemon);
    }
    return pokemonList;
  });

  const addPokemonToPokedex = async (pokemon) => {
    try {
      const response = await fetch('http://localhost:3000/api/add-pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pokemon), // Send the correct data 
      });
  

      if (response.ok) {
        const addedPokemon = await response.json();
        console.log('Added Pokemon:', addedPokemon);
      } else {
        console.error('Failed to add Pokemon');
      }
    } catch (error) {
      console.error('Error adding Pokémon:', error);
    }
  };

  const clickToAdd = async (pokemon) => {

    try {
      await addPokemonToPokedex(pokemon);
    } catch (error) {
      console.error("Error adding Pokémon:", error);
    }


  };

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
          <PokeCards
            key={pokemon.id}
            pokemon={pokemon}
            clickToAdd={clickToAdd}
          />
        ))}
      </div>
    </div>
  );
}
