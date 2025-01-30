// Crear un documento con el nombre ej137.js
// Crear un array con números de 0 a 100
const numeros = []
for (contador =0; contador <= 100; contador++) {
    numeros.push(contador)
}

// Crear un nuevo array incrementando cada valor del array en 10
const numerosIncrementados = numeros.map(function (numero) {
    return numero + 10
})

// Mostrar en consola el ínidice, valor original y valor incrementado de cada uno de los primeros 10 valores
for (let indice = 0; indice < 10; indice++) {
    console.log(
      `Índice: ${indice}, Valor original: ${numeros[indice]}, Valor incrementado: ${numerosIncrementados[indice]}`
    )
  }