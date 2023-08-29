// const express = require('express')
import express from 'express'
import dotenv from "dotenv";
// import cors from "cors";
import db from './config/db.js'
// import  PokemonModel  from "./schemas/pokemon.schema.js";
// import { UserModel } from "./schemas/user.schema.js";

import router from './routes/pokemonRoutes.js'


dotenv.config()

db()
const port = 3000 || process.env.PORT;

// const corOptions = {
//     origin:'http://localhost:5173/api/add-pokemon',
//     methods:"GET,POST,PUT,DELETE",
//     credentials: true,
//     optionSuccessStatus:200
// }



const app = express()
app.use(express.json())
// app.use(cors(corOptions))



app.use('/api/pokemon', router);




app.listen(port, ()=>{
  console.log("Server running on port 3000")


})  