//Crear un documento con el nombre ej80.js
//Copiar y pegar el código del ejercicio ej70.js
//Refactorizar el código utilizando la estructura do/while en lugar de while

// let contador = 0
// let suma = 0

// while(contador <= 1000) {
//     if(contador % 2 !== 0)
//     suma += contador;
//     console.log(`Número impar: ${contador}, Suma parcial: ${suma}`)
    
// }

let contador = 0;
let suma = 0;

do {
    if (contador % 2 !== 0) {
        suma += contador; // Sumar solo si el número es impar
    }
    console.log(`Número impar: ${contador}, Suma parcial: ${suma}`);
    contador++; // Incrementar contador para evitar el bucle infinito
} while (contador <= 10);
