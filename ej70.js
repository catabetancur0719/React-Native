// Crear un documento con el nombre ej70.js
// Mostrar en consola la suma parcial de todos los números impares que van desde 0 hasta 1000 utilizando la estructura while.

let contador = 0
let suma = 0

while(contador <= 1000) {
    if(contador % 2 !== 0)
    suma += contador;
    console.log(`Número impar: ${contador}, Suma parcial: ${suma}`)
    
}
