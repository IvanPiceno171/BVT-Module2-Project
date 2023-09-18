import React from 'react'

export default function PokeCards({pokemon, clickToAdd}) {

  return (
    <div>
        
        <li className="card">
        <img className="card-image" src={pokemon.image} alt={pokemon.name} />
        <h2 className="card-title">{pokemon.id}. {pokemon.name}</h2>
        <p className="card-subtitle">Type: {pokemon.types.map((type) => type).join(', ')}</p>
        <p className="card-subtitle">Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>
        <button className="addButton" onClick={()=>clickToAdd(pokemon)}>
          Add to Pokedex
        </button>
        </li>
   </div>
  )
}
