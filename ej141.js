// Crear un documento con el nombre ej141.js
// Crear una array de gastos para un viaje, por ejemplo 100 pesos de hotel, 1000 de viaje y 200 de comida
const gastosDeViaje = [ 100, 1000, 200]

// Sumar todos los valores de los gastos utilizando reduce
const totalGastos = gastosDeViaje.reduce((acumulador, gasto) => acumulador + gasto, 0)

// Mostrar en consola cuanto vamos a gastar en el viaje
console.log(`El total de gastos en el viaje es: ${totalGastos} pesos`)