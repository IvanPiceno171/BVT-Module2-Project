// timer

const date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()


let timerContainer = document.querySelector(".clock-div");
let yearLi = document.createElement('div')
let monthdiv = document.createElement('div')
let dayLi = document.createElement('div')
yearLi.innerText =year
monthdiv.innerText = month
dayLi.innerText = day
if(month === 3){
    monthdiv.innerText = "April "
}
if(month === 4){
    monthdiv.innerText = "May"
}
timerContainer.append(monthdiv)
timerContainer.append(dayLi)
timerContainer.append(yearLi)





// Pokemon rendered
const contain = document.getElementById('container1')

const fetchPoke = async () => {
    let x = 0
    const allPokemon = []
    while (x < 151) {
        x++;
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
            const data = await response.json();
                // console.log(data)
            const pokemon = {}; //empty object 

            // creates object for every iteration

            pokemon.name = data.name; // pokemon['name'] = data.name;
            pokemon['id'] = data.id;
            pokemon['image'] = data.sprites['front_default']

            allPokemon.push(pokemon) // pushes each obj into array

        } catch (error) {
            console.error(error)
        }
    }
    displayPoke(allPokemon);
}
fetchPoke();


function displayPoke(pokemon) {

    const allPoke = pokemon.map((poke) => {
        return `
        <div class = "individual-pokemon"> 
       <li class="card">
       <img class="card-image" src="${poke.image}"/>
       <h2 class="card-title">${poke.id}.${poke.name}</h2>
        </li>
        </div>
        `
    }).join('')
    contain.innerHTML = allPoke;

    const searchBar = document.getElementById('searchbox');

    searchBar.addEventListener('submit', (e) => {
        e.preventDefault();
        let inputbox = document.querySelector('.inputText').value

        let pokemonHTML = '';

    for (x of pokemon) {
        //   search bar
            if (inputbox.toLowerCase() === x.name.toLowerCase()) {
                // console.log('match')
                pokemonHTML = `
                <div class = "individual-pokemon"> 
               <li class="card">
               <img class="card-image" src="${x.image}"/>
               <h2 class="card-title">${x.id}. ${x.name}</h2>
                </li>
                </div>`
            }
            else if (x.name.toLowerCase().includes(inputbox.toLowerCase())) {
                pokemonHTML += `<div class = "individual-pokemon"> 
                <li class="card">
                <img class="card-image" src="${x.image}"/>
                <h2 class="card-title">${x.id}. ${x.name}</h2>
                 </li>
                 </div>`;
              }
            
            contain.innerHTML = pokemonHTML
        }

        })


        // Reset button to reset all pokemon


    }



