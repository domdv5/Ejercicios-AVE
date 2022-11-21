let input = document.getElementById("name-pokemon")

const cardPokemon = () =>{

  nameOrIdPokemon = document.getElementById("name-pokemon").value

  fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrIdPokemon}/`)
  .then(response => response.json())
  .then(data => {
    document.querySelector(".card-title").innerHTML = `<b>Nombre:</b> ${data.name}`
    document.querySelector(".card-img-top").src = data.sprites.front_default
    document.querySelector(".item1").innerHTML = `<b>Numero de pokedex:</b> ${data.id}`
    document.querySelector(".item2").innerHTML = `<b>Tipo:</b> ${data.types[0].type.name}`
    document.querySelector(".item3").innerHTML = `<b>Peso:</b> ${data.weight}`
    document.querySelector(".item4").innerHTML = `<b>Altura:</b> ${data.height}`
  });

}

input.addEventListener("change", cardPokemon)

