// # Ejercicio 155

// - Crear un documento con el nombre ej155.js
// - Vamos a crear una colección de juegos y los vamos a listar (mostrar en consola)
// - Los juegos tienen las siguientes propiedades y métodos:
//   - propiedad: nombre, tipo de dato: string
//   - propiedad: precio, tipo de dato: number
//   - propiedad: cantidadVendida, tipo de dato: number
//   - propiedad: localidad, tipo de dato: string
// - Declarar la colección **juegos**, crear y asignar los siguientes juegos:

const juegos = [

    {
        nombre: 'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
        precio: 1060,
        cantidadVendida: 276,
        localidad: 'Capital Federal'
    },

    {   nombre: "Lego Marvel Super Heroes",
        precio: 700,
        cantidadVendida: 48,
        localidad: "Capital Federal"
    },
    
    {   nombre: "Gta V Ps4 Físico",
        precio: 1449,
        cantidadVendida: 82,
        localidad: "Santa Fe",
    },

    {   nombre: "Mortal Kombat Xl Ps4 Original Fisico Sellado Nuevo",
        precio: 1190,
        cantidadVendida: 348,
        localidad: "Capital Federal"
    },

    {
        nombre:" Gta V Ps4 Fisico Grand Theft Auto V Gta5 Nuevo Sellado",
        precio: 1250,
        cantidadVendida: 445,
        localidad: "Buenos Aires"
    },

    {
        nombre: "Fifa 2017 Juego Físico Play 4 Nuevo!!!!!!",
        precio: 890,
        cantidadVendida: 182,
        localidad: "Capital Federal"
    },

    {
        nombre: "Uncharted 4 Ps4 Fisico El Desenlace Del Ladrón Playstation 4",
        precio: 950,
        cantidadVendida: 517,
        localidad:" Capital Federal"
    },

    {
        nombre:" Mortal Kombat Xl Ps4 Cd Fisico Sellado Original !!!",
        precio: 940,
        cantidadVendida: 275,
        localidad: "Capital Federal"
    },

    {
        nombre: "Need For Speed Ps4 Físico Nuevo Sellado Playstation",
        precio: 790,
        cantidadVendida: 89,
        localidad: "Capital Federal"
    },

    {   
        nombre: "Lego Batman",
        precio: 1000,
        cantidadVendida: 39,
        localidad: "Capital Federal",
    },

    {
        nombre: "Fifa 17 Ps4 Original Fisico 2017",
        precio: 1290,
        cantidadVendida: 310,
        localidad: "Capital Federal"
    },

    {  nombre: "Resident Evil 7 Ps4 Biohazard Físico",
        precio: 1390,
        cantidadVendida: 154,
        localidad:" Capital Federal",

    },

    {
        nombre: "Dragon Ball Xv Xenoverse 2 Ps4 Fisico Nuevo Dbxv2 Alclick",
        precio: 1390,
        cantidadVendida: 241,
        localidad: "Capital Federal"
    }
]

// - Recorrer la colección **juegos** y mostrar en consola el listado de juegos de la siguiente manera:
juegos.forEach(function(juego) {
    console.log(juego.nombre)
    console.log(`$ ${juego.precio}`)
    console.log(`${juego.cantidadVendida} vendidos`)
    console.log(juego.localidad)
    console.log("")
})







// ```bash:
// Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado
// $ 1.060
// 276 vendidos
// Capital Federal

// Lego Marvel Super Heroes
// $ 700
// 48 vendidos
// Capital Federal

// Gta V Ps4 Físico
// $ 1.449
// 82 vendidos
// Santa Fe

// Mortal Kombat Xl Ps4 Original Fisico Sellado Nuevo
// $ 1.190
// 348 vendidos
// Capital Federal

// Gta V Ps4 Fisico Grand Theft Auto V Gta5 Nuevo Sellado
// $ 1.250
// 445 vendidos
// Buenos Aires

// Fifa 2017 Juego Físico Play 4 Nuevo!!!!!!
// $ 890
// 182 vendidos
// Capital Federal

// Uncharted 4 Ps4 Fisico El Desenlace Del Ladrón Playstation 4
// $ 950
// 517 vendidos
// Capital Federal

// Mortal Kombat Xl Ps4 Cd Fisico Sellado Original !!!
// $ 940
// 275 vendidos
// Capital Federal

// Need For Speed Ps4 Físico Nuevo Sellado Playstation Alclick
// $ 790
// 89 vendidos
// Capital Federal

// Lego Batman
// $ 1000
// 39 vendidos
// Capital Federal

// Fifa 17 Ps4 Original Fisico 2017
// $ 1.290
// 310 vendidos
// Capital Federal

// Resident Evil 7 Ps4 Biohazard Físico
// $ 1.390
// 154 vendidos
// Capital Federal

// Dragon Ball Xv Xenoverse 2 Ps4 Fisico Nuevo Dbxv2 Alclick
// $ 1.390
// 241 vendidos
// Capital Federal
// ```