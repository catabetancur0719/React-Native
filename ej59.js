//Crear un documento con el nombre ej59.js
//Declarar la variable numero1 y numero2
//Asignar un valor numérico a cada variable declarada
const numero1 = 5;
const numero2 = 8;
//Si la variable numero1 y numero2 son iguales entonces
//Mostrar el siguiente mensaje en consola: Los dos números son iguales
if (numero1 === numero2) {
    console.log("Los dos números son iguales")
}

//Si la variable numero1 es más grande que numero2 entonces
//Mostrar el siguiente mensaje en consola: La variable numero1 es más grande que numero2
else if(numero1 > numero2) {
    console.log("La variable numero1 es más grande que numero2")
}

//Si No
//Mostrar el siguiente mensaje en consola: La variable numero2 es más grande que numero1
else {
    console.log("La variable numero2 es más grande que numero1")
}

//Cambiar el valor de la variable hora un par de veces y ejecutarlo para ver que pasa
//Probar cambiar los mensajes utilizando los valores reales de cada variable

const mensaje = 
    numero1 === numero2 
        ? "Los dos números son iguales"
        : numero1 > numero2 
        ? "La variable numero1 es más grande que numero2"
        : "La variable numero2 es más grande que numero1";
        
console.log(mensaje);