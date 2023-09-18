

import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  abilities: [
    {
      ability: {
        name: String, // Assuming the ability name is a string
        // You can add more properties here if needed
      },
      is_hidden: Boolean,
      slot: Number,
    },
  ],
  types: [
    String,
  ],
});

const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

export default PokemonModel;
