// Crear un documento con el nombre ej93.js
// Copiar y pegar el código del ejercicio ej73.js
// Refactorizar el código utilizando la estructura for en lugar de do/while

// let contador = 14;
// let mensaje = '';

// while (contador > 0) {

//   mensaje = '*'.repeat(contador);
//   console.log(mensaje);
//   contador--;
// }

let contador = 14;
let mensaje = '';

for (let contador = 14; contador > 0; contador--) {
  mensaje = '*'.repeat(contador);
  console.log(mensaje);
}
