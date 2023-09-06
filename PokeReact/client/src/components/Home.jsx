import React from 'react'
// import Dates from '../components/Date'
import SearchBar from '../components/SearchBar'
import PokemonList from '../components/PokemonList'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div>
      {/* <Dates/> */}
      <Navbar/>
        <SearchBar/>
        <PokemonList/>
    </div>
  )
}
