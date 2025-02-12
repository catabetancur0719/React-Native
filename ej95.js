// Crear un documento con el nombre ej95.js
// Copiar y pegar el código del ejercicio ej75.js
// Refactorizar el código utilizando la estructura for en lugar de do/while

// Definimos las primeras dos variables de la secuencia
let a = 0, b = 1;

for (let count = 0; count < 10; count++) {
  console.log(a); // Mostramos el número actual

  // Calculamos el siguiente número de la secuencia
  let siguiente = a + b;

  // Movemos los valores: el segundo número ahora es el primero
  a = b;
  b = siguiente;
}
