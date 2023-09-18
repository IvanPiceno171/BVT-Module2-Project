// const express = require('express')
import express from 'express'
const router = express.Router()
import {  addPokemon,getPokemon, getPokemonByType } from '../controllers/pokeController.js'

router.get('/', getPokemon)

router.get('/type', getPokemonByType)

router.post('/', addPokemon)

// router.put('/:id', updateGoals) //put is update

// router.delete('/:id', deleteGoals)

export default router