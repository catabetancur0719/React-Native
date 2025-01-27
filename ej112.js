// Crear un documento con el nombre ej112.js
// Crear una función que se llame mostrarNumeros que acepte 2 parámetros numéricos inicio y fin
// Mostrar en consola los números que van desde el inicio hasta el fin
// Si el primer parámetro es más grande que el segundo la secuencia tiene que ser ascendente
// En caso que el primer número sea más chico que el primero la secuencia tiene que ser descendente
// Ejecutar la función utilizando los siguientes números:
// inicio = 0, fin = 1000
// inicio = 1000, fin = 0
// inicio = 100, fin = 100
// inicio = "100", fin = 300
// Resolver de alguna forma los siguientes inconvenientes
// Los números sean iguales
// Algunos de los parámetros no son números

function mostrarNumero(inicio, fin){
    if (typeof inicio !== 'number' || typeof fin !== 'number') {
        console.log('los parametros tienen que ser numeros')
        return
    }
}

    if (inicio == fin) {
        console.log(`Ambos parametros son ${inicio}`)
        return
    }

    if (inicio < fin) {
        //incrementar
        for (let numero = inicio; numero <= fin; numero++) { 
            console.log(numero)
        }
    } else {
        for (let numero = inicio; numero >= fin; numero--) {
            console.log(numero)
        }
    }

    console.log('llego hasta aca')
