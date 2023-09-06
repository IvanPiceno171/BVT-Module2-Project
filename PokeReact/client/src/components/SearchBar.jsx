import React from 'react'

export default function SearchBar() {



  // const searchBar = document.getElementById('searchbox');

  //   searchBar.addEventListener('submit', (e) => {
  //       e.preventDefault();
  //       let inputbox = document.querySelector('.inputText').value

  //       let pokemonHTML = '';

  //   for (x of pokemon) {
  //       //   search bar
  //           if (inputbox.toLowerCase() === x.name.toLowerCase()) {
  //               // console.log('match')
  //               pokemonHTML = `
  //               <div class = "individual-pokemon"> 
  //              <li class="card">
  //              <img class="card-image" src="${x.image}"/>
  //              <h2 class="card-title">${x.id}. ${x.name}</h2>
  //               </li>
  //               </div>`
  //           }
  //           else if (x.name.toLowerCase().includes(inputbox.toLowerCase())) {
  //               pokemonHTML += `<div class = "individual-pokemon"> 
  //               <li class="card">
  //               <img class="card-image" src="${x.image}"/>
  //               <h2 class="card-title">${x.id}. ${x.name}</h2>
  //                </li>
  //                </div>`;
  //             }

  //           contain.innerHTML = pokemonHTML
  //       }

  //       })










  return (
    <div>
        <div className="form-holder">
        <form id="searchbox">
            <label htmlFor="">search for Pokemon</label>
            <input className = "inputText" type="text"/>
            <button type="submit" id="form-button">Submit</button>
        </form>
            {/* <button id="side-bar-pokemon">see collected pokemon</button>         */}
    </div>
    </div>
  )
}
