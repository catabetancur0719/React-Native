// Crear un array números
const numeros = [];

// Ingresar números de 0 a 10000
for (let contador = 0; contador <= 10000; contador++) {
  numeros.push(contador)
}

// Sumar los valores de todos los números del array
let suma = 0

for (let contador = 0; contador < numeros.length; contador++) {
  suma += numeros[contador]

  // Mostrar en consola los resultados parciales cada 1000 números
  if (contador % 1000 === 0) {
    console.log(`Suma parcial hasta el índice ${contador}: ${suma}`)
  }
}

// Mostrar en consola el resultado final
console.log(`Suma total: ${suma}`)

// Si el número es igual a 50005000 Entonces
if (suma === 50005000) {
  console.log("El ejercicio es correcto")
} else {
  console.log("Verificar el ejercicio para obtener el resultado esperado!!!")
}
