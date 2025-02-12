// Crear un documento con el nombre ej191.js
// Utilizando fetch intenta obtener los datos de la API https://pokeapi.co/api/v2/pokemon.
// Utiliza Promises para manejar el resultado de fetch.
// Parsea el JSON y muestra en pantalla los nombres de los primeros 20 Pokemones.
const pokeUrl = "https://pokeapi.co/api/v2/pokemon";

fetch(pokeUrl)
  .then((response) => {
    return response.json();
  })
  .then((pokemones) => {
    console.log(pokemones)

// Mostrar los nombres con la primer letra en mayúscula (repaso de charAt, toUpperCase, substring).
// Manejar tanto el caso de éxito como el de error al hacer el pedido de Pokemones.
// En caso de Error mostrar el error en pantalla (Para probar pueden desconectar internet por un segundo al ejecutarlo).
const nombresEnPantalla = pokemones.results.slice(0, 20).map((pokemon) => {
    return pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)
    })

    nombresEnPantalla.forEach((nombre) => console.log(`Pokemon: ${nombre}`))
})
.catch((error) => {
    console.error("Error al obtener los datos:", error)
})
