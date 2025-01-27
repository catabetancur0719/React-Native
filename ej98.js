// Crear un documento con el nombre ej98.js
// Sumar los números del 0 al 1000
// Cortar la ejecución si la suma es superior a 100
// Mostrar el resultado final en consola
let suma = 0;

for (let contador = 0; contador <= 1000; contador++) {
  suma += contador; // Acumula la suma

  if (suma > 100) {
    console.log("La suma ha superado 100. Cortando la ejecución...");
    break; //si la suma supera 100
  }
}

console.log("Resultado final:", suma);
