import './App.css'
import React from 'react'
import Dates from './components/Date'
import PokemonList from './components/PokemonList'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <>
      <Dates/>
      
      <SearchBar/>

      <PokemonList/>
 
    </>
  )
}

export default App
