// Crear un documento con el nombre ej198.js
// Crar una nueva clase con el nombre Vehiculo y replicar las propiedades y funcionalidades que tiene el siguiente objeto literal.

class Vehiculo {
    constructor(marca, modelo, cantidadDePuertas, anio, color) {
      this.marca = marca;
      this.modelo = modelo;
      this.cantidadDePuertas = cantidadDePuertas;
      this.anio = anio;
      this.color = color;
    }
  
    resultado() {
      console.log(`${this.marca} ${this.modelo} ${this.anio}`)
    }
  
    mostrarColor() {
      return this.color;
    }
  }
  
 
  const vehiculo = new Vehiculo("Toyota", "Rav4", 4, 2024, "Black")
  const vehiculo2 = new Vehiculo("Honda", "Pilot", 4, 2025, "Dark Blue")
  
  
  vehiculo.resultado()
  console.log(vehiculo.mostrarColor())
  
  vehiculo2.resultado()
  console.log(vehiculo2.mostrarColor())
  