// Crear un documento con el nombre ej119.js

// Crear el siguiente array con el nombre datos: [42, true, function() {return 'El significado de la vida es: '}]
const datos = [42, true, function() {return 'El significado de la vida es: '}] // sacar el valor de la funcion 

// Si el segundo item en el array datos es verdadero entonces
// Mostrar en consola: El significado de la vida es: 42
if(datos[1] === true){
    console.log(datos[2]() + datos[0]); 
}
