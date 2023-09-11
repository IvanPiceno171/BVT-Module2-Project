import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";

export default function Pokedex() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);

  useEffect(() => {
    let ignore = false;

    if (!ignore) getPokemon();
    return () => {
      ignore = true;
    };
  }, []);

  const getPokemon = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/add-pokemon", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(), // Send the correct data here
      });
      if (response.ok) {
        const caughtPokemon = await response.json();
        setCaughtPokemon(caughtPokemon.pokemon)
      }
    } catch (error) {
      throw new Error("error getting pokemon");
    }
  };
console.log(caughtPokemon)
  return (
    <div>
      <Navbar />
      <h1>caught pokemon</h1>
      <ul>
        {caughtPokemon.map((poke) => (
          <li key={poke._id}>
            <img src={poke.image} alt={poke.name} />
            <p>Name: {poke.name}</p>
            <p>ID: {poke.id}</p>
            {/* Add more information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}
