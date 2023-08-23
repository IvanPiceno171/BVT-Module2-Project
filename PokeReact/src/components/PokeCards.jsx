import React from 'react'

export default function PokeCards({pokemon}) {
    // const addButton = document.querySelectorAll('.addButton'); //grabs all buttons NodeList
    // addButton.forEach((button) => {
    //     button.addEventListener('click', (e) => {
    //         // const pokeindex = e.target.dataset.index; //dataset is grabs data-index value
    //         const toPokedex = e.target.name

    //         let caughtArray = localStorage.getItem("caught");
            
    //   caughtArray = caughtArray ? JSON.parse(caughtArray) : []; // Retrieve stored array or initialize as empty if none exists

    //         if (!caughtArray.includes(toPokedex)) {

    //             caughtArray.push(toPokedex); // Add the caught Pokemon to the array
    //         }

    //         localStorage.setItem("caught", JSON.stringify(caughtArray)); // Store the updated array in localStorage
    //         console.log(caughtArray);
    //         // return caughtArray
    //     })
    // });


  return (
    <div>
        
        <li className="card">
        <img className="card-image" src={pokemon.image} alt={pokemon.name} />
        <h2 className="card-title">{pokemon.id}. {pokemon.name}</h2>
        <p className="card-subtitle">Type: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
        <p className="card-subtitle">Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>
        <button className="addButton" >
        {/* <button className="addButton"  onClick={addToPokedex}> */}
          Add to Pokedex
        </button>
        </li>
   </div>
  )
}
