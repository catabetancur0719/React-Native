// Crear un documento con el nombre ej128.js
// Copiar y pegar el código del último ejercicio 127
const saboresHelados = []
saboresHelados.push('Chocolate','Brownie','Choco Rochelle', 'Avellana', 'Fresa', 'Arequipe', 'Frutos rojos', 'Vainilla', 'Pistacho', 'Caramelo')

console.log(saboresHelados)

const CambioDeSabores = saboresHelados[0]
saboresHelados[0] = saboresHelados[saboresHelados.length - 1]
saboresHelados[saboresHelados.length - 1] = CambioDeSabores

console.log("Sabores de Helados: ",saboresHelados)

// Eliminar los 2 últimos gustos de la lista de helados
// Asignar los gustos eliminados en el array de gustos que no tienen stock
// Mostrar la lista de gustos que quedó
// Mostrar la lista de gustos sin stock


const saboresSinStock = [];
saboresSinStock.push(saboresHelados.shift()) 
saboresSinStock.push(saboresHelados.shift())
saboresSinStock.push(saboresHelados.pop())
saboresSinStock.push(saboresHelados.pop())

// Asignar los gustos eliminados en un nuevo array de gustos que no tienen stock
// Mostrar la lista de gustos que quedó
// Mostrar la lista de gustos sin stock
console.log("Sabores sin stock: ",saboresSinStock)