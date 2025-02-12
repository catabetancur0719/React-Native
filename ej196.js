// Crear un documento con el nombre ej196.js
// Dado el siguiente objeto literal crear una función Vehiculo que retorne una nueva instancia con las mismas propiedades y métodos.

function Vehiculo (marca, modelo, cantidadDePuertas, anio, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.cantidadDePuertas =  cantidadDePuertas;
    this.anio = anio;
    this.color = color;
    this. mostrarCarro = function () {
        console.log(`${this.marca} ${this.modelo} ${this.anio}`)
    }
}

const vehiculo = new Vehiculo("Toyota", "Rav4", 4, 2024, "Black")
const vehiculo2 =  new Vehiculo("Honda", "Pilot", 4, 2025, "Dark Blue")

vehiculo.mostrarCarro()
vehiculo2.mostrarCarro()

//Crear la nueva instancia y mostrar los siguientes datos:


//Utilizar la función Vehiculo para construir otra instancia pero ahora con los valores: Honda, Pilot, 4, 2025, Dark Blue.


//Al ejecutar el código se deben ver los siguientes datos:
// Toyota Rav4 2024
// Black
// Honda Pilot 2025
// Dark Blue
