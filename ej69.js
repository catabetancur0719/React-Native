// Crear un documento con el nombre ej69.js
// Mostrar en consola la suma parcial de todos los números que van desde 0 hasta 1000 utilizando la estructura while.


let contador = 0
let resultado = 0 

while (contador <= 1000){
    
    console.log('numero: ', contador)
    resultado += contador
    contador++
}

console.log(resultado)