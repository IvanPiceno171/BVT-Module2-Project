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


const cont = document.getElementById('container1')
  const fetchPoke = async ()=>{
    let x = 0
    const allPokemon = []
    while(x<151){
        x++;
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
            const data = await response.json();
            
            const pokemon = {}; //empty object 

            // creates object for every iteration

            pokemon.name = data.name; // pokemon['name'] = data.name;
            pokemon['id'] = data.id;
            pokemon['image'] = data.sprites['front_default']

            allPokemon.push(pokemon) // pushes each obj into array

        }catch(error){
            console.error(error)
        }
    }
    displayPoke(allPokemon);
  }

  fetchPoke();


  function displayPoke(pokemon){
    console.log(pokemon)
    const allPoke = pokemon.map((poke)=>{
       return ` <li class="card">
       <img class="card-image" src="${poke.image}"/>
       <h2 class="card-title">${poke.id}. ${poke.name}</h2>
    </li>
        `
    }).join('')
    cont.innerHTML = allPoke;
  }

