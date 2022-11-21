//● Suma total de pokemones por tipo, debe recibir el tipo en string
const sumTypePokemos = (type) => {
  fetch(`https://pokeapi.co/api/v2/type/${type}/`)
    .then(response => response.json())
    .then(data => {
      const total = data.pokemon.length
      alert(`Existe un total de ${total} pokemones de tipo ${type}`);
    });
}

const tipo = prompt("Digite el tipo de pokemon en ingles")


sumTypePokemos(tipo)


// ● Dado 2 tipos de pokémon retornar todos los pokemones que cumplen con esos 2 tipos.

/* const namesPokemons = (type1, type2) => {
  fetch(`https://pokeapi.co/api/v2/type/${type1}/`)
    .then(response => response.json())
    .then(data => {
      const total1 = data.pokemon.length

      document.write(`Pokemon's names type ${type1}: <br>`)
      for (let i = 0; i < total1; i++) {
        document.write("<br>" + data.pokemon[i].pokemon.name + "<br>")
      }
    });
    

  fetch(`https://pokeapi.co/api/v2/type/${type2}/`)
    .then(response => response.json())
    .then(data => {
      const total2 = data.pokemon.length

      console.log(`Pokemon's names type ${type2}:`)
      for (let i = 0; i < total2; i++) {
        console.log(data.pokemon[i].pokemon.name);
      }
    });
}

const tipo1 = prompt("Digite el primer tipo de pokemon")
const tipo2 = prompt("Digite el segundo tipo de pokemon")

namesPokemons(tipo1, tipo2) */


//● Dado el nombre de un pokémon retornar el número del mismo.

/* const pokedexNumber = (name) => {
  fetch(` https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(response => response.json())
    .then(data => console.log(`El numero del pokemon ${name} en la pokedex es: ${data.id}`));
}

const nombre = prompt("Digite el nombre del pokemon en ingles")


pokedexNumber(nombre) */

//● Dado el número de un pokémon retornar un objeto con sus 6 stats base

/* const pokedexNumber = (number) => {
  fetch(` https://pokeapi.co/api/v2/pokemon/${number}/`)
    .then(response => response.json())
    .then(data => {

    console.log(data.stats[0].base_stat);
    
      for (let i = 0; i < 6; i++) {
        let statsPokemon = {
          "stats": data.stats[i].base_stat
        }
        console.log(statsPokemon);
      }

    });
}

const nombre = prompt("Digite un numero de pokemon")


pokedexNumber(nombre) */

//● Realizar una función que reciba un arreglo de números (Ids de pokémon) y un
//ordenador y retorne los pokémon en un arreglo con su nombre, tipo y peso
//ordenados según se indique por la función por uno de estos 3 indicadores.

/* const arrayPokemons = (array) => {

  for (let i = 0; i < array.length; i++) {

    fetch(` https://pokeapi.co/api/v2/pokemon/${array[i]}/`)
      .then(response => response.json())
      .then(data => { console.log([data.name, data.weight, data.types[0].type.name, data.types[1].type.name]) })
  }
}


const pregunta = parseInt(prompt("Cuantos pokemons desea agregar?"))

for (let i = 1; i <= pregunta; i++) {

  const ids = parseInt(prompt(`Ingrese el id del pokemon ${i}`))

  const newArray = []
  newArray.push(ids)

  arrayPokemons(newArray)

} */

//● Recibir un número y un tipo (de pokémon) y retornar un true o false si el
//pokémon de ese número posee este tipo.

/* const validatePokemon = (dato, type) => {
  fetch(` https://pokeapi.co/api/v2/pokemon/${dato}/`)
    .then(response => response.json())
    .then(data => {
      if (type === data.types[0].type.name || type === data.types[1].type.name) {
        const boolean = true;
        return console.log(boolean);
      } else {
        const boolean = false;
        return console.log(boolean);
      }
    })

}


const nombre = prompt("Ingrese un nombre de un pokemon en ingles")
const tipo = prompt('Ingrese el tipo del pokemon')

validatePokemon(nombre, tipo) */


