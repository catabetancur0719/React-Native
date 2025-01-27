// Crear un documento con el nombre ej110.js
// Crear la función promedio que acepta 5 notas (numbers)
// Mostrar en consola el promedio de la cursada

function promedio(nota1, nota2, nota3, nota4, nota5) {

    let suma = nota1 + nota2 + nota3 + nota4 + nota5
    let promedioNotas = suma / 5

    console.log(`El promedio de la cursada es: ${promedioNotas}`)
  }

promedio(8, 9, 7, 10, 6)
promedio(10, 10, 9, 8, 7)

