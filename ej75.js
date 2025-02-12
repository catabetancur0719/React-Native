// Crear un documento con el nombre ej75.js
// Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while
// Podes leer más sobre esta secuencia en Wikipedia
// Acá podes encontrar una pequeña ayuda

// Definimos las primeras dos variables de la secuencia
let a = 0, b = 1;

// Contador para los primeros 10 números
let count = 0;

// Usamos while para generar la secuencia
while (count < 10) {
  console.log(a); // Mostramos el número actual

  // Calculamos el siguiente número de la secuencia
  let siguiente = a + b;

  // Movemos los valores: el segundo número ahora es el primero
  a = b;
  b = siguiente;

  // Aumentamos el contador
  count++;
}


/*ESTUDIARLO MAS*/ 