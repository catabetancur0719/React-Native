// # Ejercicio 63

// - Crear un documento con el nombre ej63.js
// - Escribir un programa que acepta como ingreso un número que representa un año (por ejemplo 2000) y muestra como **salida** el nombre del campéon de ese año del fútbol argentino.
// - Utilizar sólo los años (desde 2000 hasta el 2017)
let anio = 2005
// - En caso de tener más de un campéon por año mostrar los distintos campeonatos en una sola variable

const campeones = {
    2000: ["(Clausura) River Plate", "(Apertura) Boca Juniors"],
    2001: ["(Clausura) San Lorenzo de Almagro", "(Apertura) Racing Club"],
    2002: ["(Clausura) River Plate", "(Apertura) Independiente"],
    2003: ["(Clausura) River Plate", "(Apertura) Boca Juniors"],
    2004: ["(Clausura) River Plate", "(Apertura) Newell´s Old Boys"],
    2005: ["(Clausura) Vélez Sarsfield", "(Apertura) Boca Juniors"],
    2006: ["(Clausura) Boca Juniors", "(Apertura) Estudiantes de La Plata"],
    2007: ["(Clausura) San Lorenzo de Almagro", "(Apertura) Lanús"],
    2008: ["(Clausura) River Plate", "(Apertura) Boca Juniors"],
    2009: ["(Clausura) Vélez Sársfield", "(Apertura) Bánfield"],
    2010: ["(Clausura) Argentinos Juniors", "(Apertura) Estudiantes de La Plata"],
    2011: ["(Clausura) Vélez Sársfield", "(Apertura) Boca Juniors"],
    2012: ["(Clausura) Arsenal F.C.", "(Torneo Inicial) Vélez Sarsfield"],
    2013: [
      "(Torneo Final) Newells Old Boys",
      "(Campeón del Campeonato de Primera División 2012/13) Vélez Sarsfield",
      "(Torneo Inicial) San Lorenzo de Almagro",
    ],
    2014: ["(Torneo Final) River Plate", "(Torneo Inicial) Racing Club"],
    2015: ["(Campeonato de Primera División) Boca Juniors"],
    2016: ["(Campeonato de Primera División) Lanús"],
    2017: ["(Campeón del Campeonato de Primera División 2016/17) Boca Juniors"],
  }

// - Según el año seleccionado Entonces
//   - Mostrar el siguiente mensaje: En el año ${anio} salió campeón: ${campeon}
// - SINO
//   - Mostrar un mensaje con el siguiente error: Por favor ingrese un año entre 2000 y 2017
if (campeones[anio]) {
    
    let campeon = campeones[anio].join();
    console.log(`En el año ${anio} salió campeón:${campeon}`)
  } else {
    console.log("Por favor ingrese un año entre 2000 y 2017.")
  }










// ## Datos

// 2000
// (Clausura) River Plate
// (Apertura) Boca Juniors
// 2001
// (Clausura) San Lorenzo de Almagro
// (Apertura) Racing Club
// 2002
// (Clausura) River Plate
// (Apertura) Independiente
// 2003
// (Clausura) River Plate
// (Apertura) Boca Juniors
// 2004
// (Clausura) River Plate
// (Apertura) Newell´s Old Boys
// 2005
// (Clausura) Vélez Sarsfield
// (Apertura) Boca Juniors
// 2006
// (Clausura) Boca Juniors
// (Apertura) Estudiantes de La Plata
// 2007
// (Clausura) San Lorenzo de Almagro
// (Apertura) Lanús
// 2008
// (Clausura) River Plate
// (Apertura) Boca Juniors
// 2009
// (Clausura) Vélez Sársfield
// (Apertura) Bánfield
// 2010
// (Clausura) Argentinos Juniors
// (Apertura) Estudiantes de La Plata
// 2011
// (Clausura) Vélez Sársfield
// (Apertura) Boca Juniors
// 2012
// (Clausura) Arsenal F.C.
// (Torneo Inicial) Vélez Sarsfield
// 2013
// (Torneo Final) Newells Old Boys
// (Campeón del Campeonato de Primera División 2012/13) Vélez Sarsfield
// (Torno Inicial) San Lorenzo de Almagro
// 2014
// (Torneo Final) River Plate
// (Torneo Inicial) Racing Club
// 2015
// (Campeonato de Primera División) Boca Juniors
// 2016
// (Campeonato de Primera División) Lanús
// 2017
// (Campeón del Campeonato de Primera División 2016/17) Boca Juniors