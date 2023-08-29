
// const PokemonModel = require('../schemas/pokemon.schema')
import PokemonModel from '../schemas/pokemon.schema.js'


//@desc GET pokemon
//@route GET /api/pokemon
//@access Private
export const getPokemon = async (req, res) =>{
    const pokemon = await PokemonModel.find()

    res.status(200).json({pokemon})
}



//@desc set goals
//@route POST /api/pokemon
//@access Private
export const addPokemon =  async (req, res) =>{
    // console.log(req.body)
    console.log('hello')
    // if(!req.body.text){
    //     res.status(400)
    //     throw new Error('Please enter text field')
    // }

    const pokemon = await PokemonModel.create( req.body)
    res.status(200).json(pokemon)
}

// module.exports = {addPokemon, getPokemon}