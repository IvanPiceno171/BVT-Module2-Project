
// import from localStorage
// import { setItem } from "./localStorage"

// timer
const date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()


let timerContainer = document.querySelector(".clock-div");
let yearDiv = document.createElement('div')
let monthDiv = document.createElement('div')
let dayDiv = document.createElement('div')
yearDiv.innerText = year
monthDiv.innerText = month
dayDiv.innerText = day
//
//  MAKE THIS INTO
// A SWITCH STATEMENT
if (month === 3) {
    monthDiv.innerText = "April "
}
if (month === 4) {
    monthDiv.innerText = "May"
}
timerContainer.append(monthDiv)
timerContainer.append(dayDiv)
timerContainer.append(yearDiv)


// Pokemon rendered
const pokeContainer = document.getElementById('container1')

const fetchPoke = async () => {
    let x = 0
    const allPokemon = []
    while (x < 151) {
        x++;
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
            const data = await response.json();

            const pokemon = {}; //empty object 

            pokemon.name = data.name; 
            pokemon['id'] = data.id;
            pokemon['image'] = data.sprites['front_default']

            allPokemon.push(pokemon) 

        } catch (error) {
            console.error(error)
        }
    }
    displayPoke(allPokemon);
}
fetchPoke();

// FUNCTION TO ADD to localStorage


function displayPoke(pokemon) {
    const allPoke = pokemon.map((poke, index) => {
        return `
        <div class = "individual-pokemon"> 
        <li class="card">
        <img class="card-image" src="${poke.image}"/>
        <h2 class="card-title">${poke.id}.${poke.name}</h2>
        <button class="addButton" data-index='${index}' name='${poke.name}'>Add to Pokedex</button>
        </li>
        </div>
        `
    }).join('')
    pokeContainer.innerHTML = allPoke;
    

     
    const addButton = document.querySelectorAll('.addButton'); //grabs all buttons NodeList
    addButton.forEach((button)=>{
        button.addEventListener('click', (e)=>{
            // const pokeindex = e.target.dataset.index; //dataset is grabs data-index value
            const toPokedex = e.target.name
            let caughtArray = localStorage.getItem("caught");
      caughtArray = caughtArray ? JSON.parse(caughtArray) : []; // Retrieve stored array or initialize as empty if none exists
      caughtArray.push(toPokedex); // Add the caught Pokemon to the array

      localStorage.setItem("caught", JSON.stringify(caughtArray)); // Store the updated array in localStorage

      console.log(caughtArray);
        })
    });


    const searchBar = document.getElementById('searchbox');
    searchBar.addEventListener('submit', (e) => {
        e.preventDefault();
        let inputbox = document.querySelector('.inputText').value
        
        let pokemonHTML = '';
        for (x of pokemon) {
            //   search bar
            if (x.name.toLowerCase().includes(inputbox.toLowerCase())) {
                pokemonHTML += `<div class = "individual-pokemon"> 
                <li class="card">
                <img class="card-image" src="${x.image}"/>
                <h2 class="card-title">${x.id}. ${x.name}</h2>
                <button class='addButton' data-index='${x.id}'>Add to Pokedex</button>
                </li>
                </div>`;
            }
            pokeContainer.innerHTML = pokemonHTML
        }
        
    })
    

    
}




