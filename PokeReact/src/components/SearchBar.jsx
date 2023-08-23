import React from 'react'

export default function SearchBar() {
  return (
    <div>
        <div className="form-holder">
        <form id="searchbox">
            <label htmlFor="">Search for Pokemon</label>
            <input className = "inputText" type="text"/>
            <button className='search-btn' type="submit" id="form-button">
            Search</button>
        </form>
            {/* <button id="side-bar-pokemon">see collected pokemon</button>         */}
    </div>
    </div>
  )
}
