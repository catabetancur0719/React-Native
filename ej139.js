// Crear un documento con el nombre ej139.js
// Crear un array números con valores entre 1 y 100
const numeros = []

for (contador = 1; contador <= 100; contador++){
    numeros.push(contador)

}

// Crear un nuevo array filtando los números pares
const numerosPares = numeros.filter(function (numero) {
    return numero % 2 === 0 
  })

// Crear un nuevo array filtando los números impares
const numerosImpares = numeros.filter(function (numero) {
    return numero % 2 !== 0
  })

// Mostrar en consola sólo los últimos 10 números pares e impares
console.log('Últimos 10 números pares:', numerosPares)
console.log('Últimos 10 números impares:', numerosImpares)