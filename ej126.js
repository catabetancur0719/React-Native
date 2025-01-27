// Crear un documento con el nombre ej126.js
// Copiar y pegar el código del ejercicio 125
const saboresHelados = []
saboresHelados.push('Chocolate','Brownie','Choco Rochelle', 'Avellana', 'Fresa', 'Arequipe', 'Frutos rojos', 'Vainilla', 'Pistacho', 'Caramelo')

console.log(saboresHelados)

// Ahora los gustos de helado se piden en otro orden del que fueron ingresados
// El primer elemento tiene que ser el último y el último el primero
// Para agregar los gustos utilizar una función que acepte 2 parámetros, la colección de gustos de helados y el nuevo gusto

const CambioDeSabores = saboresHelados[0];
saboresHelados[0] = saboresHelados[saboresHelados.length - 1];
saboresHelados[saboresHelados.length - 1] = CambioDeSabores;

// Esta función retorna la lista modificada
// Mostrar en consola los gustos de helado
console.log(saboresHelados)

