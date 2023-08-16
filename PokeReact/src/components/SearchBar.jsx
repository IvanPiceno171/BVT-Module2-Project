import React from 'react'

export default function SearchBar() {
  return (
    <div>
        <div className="form-holder">
        <form id="searchbox">
            <label for="">search for pokemon</label>
            <input className = "inputText" type="text"/>
            <button type="submit" id="form-button">Submit</button>
        </form>
            {/* <button id="side-bar-pokemon">see collected pokemon</button>         */}
    </div>
    </div>
  )
}
