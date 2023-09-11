
// const PokemonModel = require('../schemas/pokemon.schema')
import PokemonModel from '../schemas/pokemon.schema.js'


//@desc GET pokemon
//@route GET /api/pokemon
export const getPokemon = async (req, res) =>{
    console.log(req.body)
    const pokemon = await PokemonModel.find()

    res.status(200).json({pokemon})
}



//@desc set goals
//@route POST /api/pokemon
export const addPokemon =  async (req, res) =>{
    
   

    const pokemon = await PokemonModel.create( req.body)
    res.status(200).json(pokemon)
}

// module.exports = {addPokemon, getPokemon}