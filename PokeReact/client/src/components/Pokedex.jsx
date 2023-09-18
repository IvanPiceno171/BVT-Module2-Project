import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Pokedex() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  // useEffect(() => {
  //   let ignore = false;

  //   if (!ignore) getPokemon();
  //   return () => {
  //     ignore = true;
  //   };
  // }, []);

  useEffect(() => {
    if (selectedType) {
      pokemonByType(selectedType);
    } else {
      getPokemon();
    }
  }, [selectedType]);

  const getPokemon = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/add-pokemon", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const caughtPokemon = await response.json();
        setCaughtPokemon(caughtPokemon.pokemon);
      }
    } catch (error) {
      throw new Error("error getting pokemon");
    }
  };
  // console.log(caughtPokemon);

  const pokemonByType = async (type) => {
    try {
      const response = await fetch(`http://localhost:3000/api/add-pokemon/type?type=${type}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response)
      if (response.ok) {
        const typesPokemon = await response.json();
        console.log('Received Pokémon data:', typesPokemon);
        setCaughtPokemon(typesPokemon.pokemon);
      }
    } catch (error) {
      throw new Error("error getting pokemon");
    }
  };

  const handleClick = (e) => {
    const buttonValue = e.target.value;
   setSelectedType(buttonValue)
    };

  return (
    <div>
      <Navbar />
<hr />
<button type="button" onClick={getPokemon}>All Pokemon</button>
<button type="button" value="normal" onClick={handleClick}>normal</button>
<button type="button" value="flying" onClick={handleClick}>flying</button>
<button type="button" value="fire" onClick={handleClick}>fire</button>
<button type="button" value="bug" onClick={handleClick}>bug</button>
<button type="button" value="water" onClick={handleClick}>water</button>
<button type="button" value="poison" onClick={handleClick}>poison</button>
<button type="button" value="ground" onClick={handleClick}>ground</button>
<button type="button" value="fairy" onClick={handleClick}>fairy</button>
<button type="button" value="grass" onClick={handleClick}>grass</button>
<button type="button" value="fighting" onClick={handleClick}>fighting</button>
<button type="button" value="electric" onClick={handleClick}>electric</button>
<hr />
{caughtPokemon.length === 0 ? (
        <h2>No Pokémon of this type</h2> ) : (
      <ul>
        {caughtPokemon.map((poke) => (
          <li key={poke._id}>
            <img src={poke.image} alt={poke.name} />
            <p>Name: {poke.name}</p>
            <p>ID: {poke.id}</p>
            {/* <p>Abilities: {poke.abilities}</p> */}
              Types:
              <ul>
                {poke.types.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            {/* Add more information as needed */}
          </li>
        ))}
      </ul>
  )}
    </div>
  );
}
