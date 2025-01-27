// Crear un documento con el nombre ej101.js
// Declarar una función que muestre los siguientes datos en consola:
// Tu Nombre
// Edad
// Teléfono
// Calle
// Altura
// Código postal
// Casado true/false

function datosParaMostrar() {

    const misDatos = {
        nombre: 'Cata', 
        edad: 31,
        tel: '123456', 
        calle:'ave 123', 
        altura: 1.62,
        codigoPostal: '1234', 
        casado: false
}
console.log('Nombre:', misDatos.nombre);
console.log('Edad:', misDatos.edad);
console.log('Teléfono:', misDatos.tel);
console.log('Calle:', misDatos.calle);
console.log('Altura:', misDatos.altura);
console.log('Código Postal:', misDatos.codigoPostal);
console.log('Casado:', misDatos.casado);
} 
datosParaMostrar()