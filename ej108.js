// Crear un documento con el nombre ej108.js
// Crear una función con el nombre ordenarNúmeros que acepte tres parámetros numéricos llamados numero1, numero2 y numero3
// Dentro de la función ordenar los números de menor a mayor
// Ejecutar la función con los siguientes parámetros: 10, 8, 25
// Mostrar en consola el siguiente resultado: 8, 10, 25
// Agregar un último parámetro que acepte un tipo de dato boolean llamado descendente
// En caso de que el parámetro descendente sea verdadero mostrar en consola el siguiente mensaje: 25, 10, 8
// Ejecutar la función agregando true cómo último parámetro en el llamado de la función, ejemplo: ordenarNúmeros(10, 8, 25, true)

function ordenarNúmeros(numero1, numero2, numero3, descendente) {
    let menor, medio, mayor

  if (numero1 <= numero2 && numero1 <= numero3) {
      menor = numero1
      if (numero2 <= numero3) {
        medio = numero2
        mayor = numero3
      } else {
        medio = numero3
        mayor = numero2
      }
    } else if (numero2 <= numero1 && numero2 <= numero3) {
      menor = numero2;
      if (numero1 <= numero3) {
        medio = numero1
        mayor = numero3
      } else {
        medio = numero3
        mayor = numero1
      }
    } else {
      menor = numero3;
      if (numero1 <= numero2) {
        medio = numero1
        mayor = numero2
      } else {
        medio = numero2
        mayor = numero1
      }
    }
  
    if (descendente) {
      console.log(`${mayor}, ${medio}, ${menor}`)
    } else {
      console.log(`${menor}, ${medio}, ${mayor}`)
    }
  }
  
 
  ordenarNúmeros(10, 8, 25, false)
  ordenarNúmeros(10, 8, 25, true)
  