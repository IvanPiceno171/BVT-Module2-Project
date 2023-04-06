// function fetchPoke() {

//     // let promise1 =  fetch('https://pokeapi.co/api/v2/pokemon/'+poke)

//     let x = 1
//     while(x<=151){
//         x++;
//         let promise1 =  fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)

//         promise1.then((response)=>{
//             return response.json();
//         }).then((data)=>{
//             const pokemon = {};
//         pokemon['name'] = data.name;
//         pokemon['id'] = data.id;
//         pokemon['image'] = data.sprites['front_shiny']
//         console.log(pokemon)
//     }).catch((error)=>{
//         console.log('Error:')

//     })
// }
//   }

// fetchPoke()


const contain = document.getElementById('container1')
const fetchPoke = async () => {
    let x = 0
    const allPokemon = []
    while (x < 151) {
        x++;
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
            const data = await response.json();

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
    for (x of pokemon) {
        //   search bar
            if (inputbox === x.name) {
                // console.log('match')
                return contain.innerHTML = `
                <div class = "individual-pokemon"> 
               <li class="card">
               <img class="card-image" src="${x.image}"/>
               <h2 class="card-title">${x.id}. ${x.name}</h2>
                </li>
                </div>`
            }
        }
        if(inputbox !== x.name){
            alert('no such pokemon found')
        }

        })


        // Reset button to reset all pokemon


    }



