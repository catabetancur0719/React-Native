// Crear un documento con el nombre ej99.js
// Sumar los números pares del 0 al 10000
// Cortar la ejecución al encontrar 10 números pares
// Mostrar en consola el resultado de los números hasta el momento del corte

let suma = 0;
let contadorPares = 0;

for (let numero = 0; numero <= 10000; numero++) {
  if (numero % 2 === 0) { // Verifica si el número es par
    suma += numero; // Acumula la suma
    contadorPares++; // Incrementa el contador de números pares

    if (contadorPares === 10) {
      console.log("Se han encontrado 10 números pares. Cortando la ejecución...");
      break; // Detiene la ejecución al encontrar 10 números pares
    }
  }
}

console.log("Resultado de la suma hasta el momento del corte:", suma);
