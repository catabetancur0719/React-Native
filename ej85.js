// Crear un documento con el nombre ej85.js
// Copiar y pegar el código del ejercicio ej75.js
// Refactorizar el código utilizando la estructura do/while en lugar de while

// Definimos las primeras dos variables de la secuencia
let a = 0, b = 1;

// Contador para los primeros 10 números
let count = 0;

do {
  console.log(a); // Mostramos el número actual

  // Calculamos el siguiente número de la secuencia
  let siguiente = a + b;

  // Movemos los valores: el segundo número ahora es el primero
  a = b;
  b = siguiente;

  // Aumentamos el contador
  count++;
} while (count < 10);


/*ESTUDIARLO MAS*/ 