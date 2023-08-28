// const express = require('express')
import express from 'express'
import dotenv from "dotenv";
import cors from "cors";
import db from './config/db.js'
import  PokemonModel  from "./schemas/pokemon.schema.js";
// import { UserModel } from "./schemas/user.schema.js";




dotenv.config()

db()
const port = 3000 || process.env.PORT;

const corOptions = {
    origin:'http://localhost:5173/api/add-pokemon',
    methods:"GET,POST,PUT,DELETE",
    credentials: true,
    optionSuccessStatus:200
}



const app = express()
app.use(express.json())
app.use(cors(corOptions))



app.post('/api/add-pokemon', async (req, res) => {
  try {
    const { name, id, image, abilities, types } = req.body; // Adjust property names based on your fetched data

    const newPokemon = new PokemonModel({
      name,
      id,
      image,
      types: [], // Adjust this if needed
      abilities: [], // Adjust this if needed
    });

    await newPokemon.save();
    console.log('New Pokémon added:', newPokemon);

    res.status(201).json(newPokemon);
  } catch (error) {
    console.error('Error adding Pokémon:', error);
    res.status(500).json({ error: 'Server error' });
  }
});




app.listen(port, ()=>{
  console.log("Server running on port 3000")


})  