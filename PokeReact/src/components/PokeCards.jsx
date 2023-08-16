import React from 'react'

export default function PokeCards({pokemon}) {


  return (
    <div>
        
        <li className="card">
        <img className="card-image" src={pokemon.image} alt={pokemon.name} />
        <h2 className="card-title">{pokemon.id}. {pokemon.name}</h2>
        <button className="addButton" >
        {/* <button className="addButton"  onClick={addToPokedex}> */}
          Add to Pokedex
        </button>
        </li>
   </div>
  )
}
