// Crear un documento con el nombre ej192.js
// Copiar el ejercicio ej191.js
// Utilizar async & await y try & catch para obtener el mismo resultado anterior.
// Mostrar el mensaje de error en pantalla (acordate de desconectar internet antes de pedir los datos al servidor).

const pokeUrl = "https://pokeapi.co/api/v2/pokemon";


async function obtenerPokemones() {
  try {
   
    const response = await fetch(pokeUrl)
   
    if (!response.ok) {
      throw new Error("Error al obtener los datos")
    }

    const pokemones = await response.json()
  
    const nombresEnPantalla = pokemones.results.slice(0, 20).map((pokemon) => {
      return pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1);
    })

    nombresEnPantalla.forEach((nombre) => console.log(`Pokemon: ${nombre}`))

  } catch (error) {
  
    console.error("Error al obtener los datos:", error)
  }
}

obtenerPokemones();

























// * Pokemon: Bulbasaur
// * Pokemon: Ivysaur
// * Pokemon: Venusaur
// * Pokemon: Charmander
// * Pokemon: Charmeleon
// * Pokemon: Charizard
// * Pokemon: Squirtle
// * Pokemon: Wartortle
// * Pokemon: Blastoise
// * Pokemon: Caterpie
// * Pokemon: Metapod
// * Pokemon: Butterfree
// * Pokemon: Weedle
// * Pokemon: Kakuna
// * Pokemon: Beedrill
// * Pokemon: Pidgey
// * Pokemon: Pidgeotto
// * Pokemon: Pidgeot
// * Pokemon: Rattata
// * Pokemon: Raticate
// Tip: vas a necesitar alguna función auxiliar que sea async & await para hacerlo.