// import mongoose from "mongoose";

// const pokemonSchema = new mongoose.Schema({
//     // id: {type: Number, required: true},
//     name: {type: String, required: true},
//     // image: {type: String, required: true},
//     types: [{type: String, required: true}],
//     // abilities: [{type: String, required: true}],
//     // flavor_text: {type: String, required: true},
//     // stats:[{type: mongoose.SchemaTypes.Mixed, required: true}]
// })

// const PokemonModel = mongoose.model('PokemonModel', pokemonSchema);

// export default PokemonModel

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
    {
      slot: Number,
      type: {
        name: String, // Assuming the type name is a string
        // You can add more properties here if needed
      },
    },
    {
      slot: Number,
      type: {
        name: String,
        // You can add more properties here if needed
      },
    },
  ],
});

const PokemonModel = mongoose.model('Pokemon', pokemonSchema);

export default PokemonModel;
