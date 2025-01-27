// Crear un documento con el nombre ej103.js
// Declarar una variable numerosPares y asignar una función
// La función numerosPares muestra en consola los números pares del 0 al 100
// Ejecutar esta función 5 veces

const numerosPares = function () {
    
    for ( let contador = 0; contador <= 100; contador++){
        if (contador % 2 === 0)
            console.log(contador)
    }
}

for (repeticion = 0; repeticion <= 5; repeticion++){
    numerosPares()
}