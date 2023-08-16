
// import from localStorage
// import { setItem } from "./localStorage"

// timer
const date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()


let timerContainer = document.querySelector(".clock-div");
let yearDiv = document.createElement('div')
let monthDiv = document.createElement('div')
let dayDiv = document.createElement('div')
yearDiv.innerText = year
monthDiv.innerText = month
dayDiv.innerText = day

switch (month) {
    case 1:
        monthDiv.innerText = "January"
        break
    case 2:
        monthDiv.innerText = "Febuary"
        break
    case 3:
        monthDiv.innerText = "March"
        break
    case 4:
        monthDiv.innerText = "April"
        break
    case 5:
        monthDiv.innerText = "May"
        break
    case 6:
        monthDiv.innerText = "June"
        break
    case 7:
        monthDiv.innerText = "July"
        break
    case 8:
        monthDiv.innerText = "August"
        break
    case 9:
        monthDiv.innerText = "September"
        break
    case 10:
        monthDiv.innerText = "October"
        break
    case 11:
        monthDiv.innerText = "November"
        break
    case 12:
        monthDiv.innerText = "December"
        break

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
    addButton.forEach((button) => {
        button.addEventListener('click', (e) => {
            // const pokeindex = e.target.dataset.index; //dataset is grabs data-index value
            const toPokedex = e.target.name

            let caughtArray = localStorage.getItem("caught");
            
      caughtArray = caughtArray ? JSON.parse(caughtArray) : []; // Retrieve stored array or initialize as empty if none exists

            if (!caughtArray.includes(toPokedex)) {

                caughtArray.push(toPokedex); // Add the caught Pokemon to the array
            }

            localStorage.setItem("caught", JSON.stringify(caughtArray)); // Store the updated array in localStorage
            console.log(caughtArray);
            // return caughtArray
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

const sideBar = document.getElementById('side-bar-pokemon')
sideBar.addEventListener('click', () => {
    document.getElementById('sideContainer').style.display = 'block';
    const caughtArray = JSON.parse(localStorage.getItem('caught')); // Retrieve the array from local storage
    const sidebarList = document.getElementById('sideContainer'); // Assuming there is an element with the ID "sideContainer" to contain the list
    sidebarList.innerHTML = ''; // clears the previous content
    caughtArray.forEach(pokemonName => {
        const listItem = document.createElement('li');
        listItem.textContent = pokemonName;
        sidebarList.appendChild(listItem);
    });
})
