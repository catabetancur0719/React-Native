// Crear un documento con el nombre ej90.js
// Copiar y pegar el código del ejercicio ej70.js
// Refactorizar el código utilizando la estructura for en lugar de do/while

// let contador = 0
// let suma = 0

// while(contador <= 1000) {
//     if(contador % 2 !== 0)
//     suma += contador;
//     console.log(`Número impar: ${contador}, Suma parcial: ${suma}`)
    
// }
let suma = 0;

for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 !== 0) {
        suma += contador;
        console.log(`Número impar: ${contador}, Suma parcial: ${suma}`);
    }
}
