// Crear un documento con el nombre ej17.js
// Crear una función con el nombre calcularPromedio que acepte un sólo parámetro numeros.
// No se puede utilizar arguments y se tiene que usar el concepto de rest.
// La función calcularPromedio calcula el promedio entre todos los números pasados como parámetros.
// Calcular y mostrar los promedios de los siguientes números:


function calcularPromedio(...numeros) {
    if (numeros.length === 0) { 
      return 0
    }
  
    let suma = 0
    for (let index = 0; index < numeros.length; index++) { 
      suma += numeros[index]
    }
  
    return suma / numeros.length
  }
  
  console.log(calcularPromedio(10, 20, 30))
  console.log(calcularPromedio(5, 15, 25, 35, 45))
  console.log(calcularPromedio(100, 200))
  console.log(calcularPromedio())
  