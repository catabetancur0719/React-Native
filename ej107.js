// Crear un documento con el nombre ej107.js
// Crear una función con el nombre numeroMasGrande que acepte dos parámetros numéricos llamados numero1 y numero2
// Ejecutar la función pasando 2 números como parámetros
// Mostrar en consola el siguiente mensaje: El número ${numero1} es más grande que ${numero2}
// Agregar la validación para ver si son el mismo número, en caso de que así sea agregar el mensaje: Los dos números son ${numero1}
// Validar que los parámetros que nos pasaron sean del tipo number, caso contrario mostrar un mensaje en consola que diga: Esta función espera valores del tipo number

function numeroMasGrande(numero1, numero2) {
    
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        console.log("Esta función espera valores del tipo number");
        return; 
    }

    if (numero1 === numero2) {
        console.log(`Los dos números son ${numero1}`);
    } else {
        
        if (numero1 > numero2) {
            console.log(`El número ${numero1} es más grande que ${numero2}`);
        } else {
            console.log(`El número ${numero2} es más grande que ${numero1}`);
        }
    }
}

numeroMasGrande(3, 4); 
numeroMasGrande(5, 5); 
numeroMasGrande(10, 2); 
