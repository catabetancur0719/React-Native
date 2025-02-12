// Crear un documento con el nombre ej197.js
// Crear un nueva instancia de vehículo utilizando Object.create utilizando vehículo como parámetro.
// Nombrar la nueva instancia como vehiculo2
// Asignar vehiculo2 los siguientes valores a la propiedad correspondiente: Honda, Pilot, 4, 2025, Dark Blue.

const vehiculo = {
    marca: "Toyota",
    modelo: "Rav4",
    cantidadDePuertas: 4,
    anio: 2024,
    color: "black",
        resultado: function () {
            console.log(`${this.marca} ${this.modelo} ${this.anio} ${this.color} `)
    }
}

const vehiculo2 = Object.create(vehiculo)

vehiculo2.marca = "Honda"
vehiculo2.modelo = "Pilot"
vehiculo2.cantidadDePuertas = 4
vehiculo2.anio = 2025
vehiculo2.color = "Dark Blue"


vehiculo2.resultado()
