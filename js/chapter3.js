// TELEFONO GAMA MEDIA
class Phone {
  constructor(marca, color, peso, resolucion, pantalla, camara, memoriaRam) {
    this.marca = marca
    this.color = color
    this.peso = peso
    this.resolucion = resolucion
    this.pantalla = pantalla
    this.camara = camara
    this.memoriaRam = memoriaRam
  }

  informacion() {
    console.log(
      `Su movil es un ${this.marca} con las siguientes caracteristicas: color ${this.color}, peso de ${this.peso} gramos, resolución ${this.resolucion}, pantalla ${this.pantalla}, camara trasera de ${this.camara}, ram de ${this.memoriaRam}`
    )
  }

  prender() {
    console.log(`Prendiendo ${this.marca}`)
  }

  reiniciar() {
    console.log(`Reiniciando ${this.marca}`)
  }

  tomarFoto() {
    console.log(`Prendiendo ${this.marca}`)
  }

  grabar() {
    console.log(`Grabando video en su ${this.marca}`)
  }
}

// TELEFONO GAMA PRO
class PhonePro extends Phone {
  constructor(
    marca,
    color,
    peso,
    resolucion,
    pantalla,
    camara,
    memoriaRam,
    camaraFrontal
  ) {
    super(marca, color, peso, resolucion, pantalla, camara, memoriaRam)
    this.camaraFrontal = camaraFrontal
  }

  informacionExtra() {
    console.log(
      `Su movil es un ${this.marca} con las siguientes caracteristicas: color ${this.color}, peso de ${this.peso} gramos, resolución ${this.resolucion}, pantalla ${this.pantalla}, camara trasera de ${this.camara} ,camara frontal de ${this.camaraFrontal} ,ram de ${this.memoriaRam}`
    )
  }

  grabarCamaraLenta() {
    console.log(`Grabar en camara lenta`)
  }

  reconocimientoFacial() {
    console.log(`Reconocimiento facial`)
  }
}

// Telefonos Gama Media
const iphone = new Phone(
  "Iphone",
  "blanco",
  300,
  "full hd",
  "oled",
  "60px",
  "8gb"
)
const xiaomi = new Phone("negro", 500, "full hd", "ips", "45px", "4gb")
const samsung = new Phone("blanco", 300, "full hd", "oled", "105px", "8gb")

// iphone.informacion()
// iphone.prender()
// iphone.reiniciar()
// iphone.tomarFoto()
// iphone.grabar()

// Telefono Gama Pro
const iphonePro = new PhonePro(
  "Iphone Pro Max",
  "blanco",
  400,
  "full hd",
  "oled",
  "60px",
  "45px",
  "8gb"
)

// iphonePro.informacionExtra()
// iphonePro.prender()
// iphonePro.reiniciar()
// iphonePro.tomarFoto()
// iphonePro.grabar()
// iphonePro.grabarCamaraLenta()
// iphonePro.reconocimientoFacial()

// APLICACIONES
class App {
  constructor(nombre, descargas, puntuacion, peso) {
    this.nombre = nombre
    this.descargas = descargas
    this.puntuacion = puntuacion
    this.peso = peso
  }

  informacion() {
    return `La aplicación se llama ${this.nombre} tiene ${this.descargas} descargas, tiene una puntuacion de ${this.puntuacion} y pesa ${this.peso} megabyts`
  }

  instalar() {
    return `Instalando ${this.nombre}`
  }

  abrir() {
    return `Abriendo ${this.nombre}`
  }

  cerrar() {
    return `Cerrando ${this.nombre}`
  }

  desinstalar() {
    return `Desinstalando ${this.nombre}`
  }
}

const facebook = new App("Facebook", 90000, 4.5, 200)
const twitter = new App("Twitter", 70000, 4.9, 105)
const whatsapp = new App("Whatsapp", 100000, 4.7, 300)

const eleccion = prompt(
  `Aqui tienes las Apps mas utilizadas en el mundo: 1.${facebook.nombre}, 2.${twitter.nombre}, 3.${whatsapp.nombre}. Presiona un numero la cualquieras descargar`
)

if (eleccion == 1) {
  alert(`${facebook.informacion()}. ${facebook.instalar()}`)
} else if (eleccion == 2) {
  alert(`${twitter.informacion()}. ${twitter.instalar()}`)
} else if (eleccion == 3) {
  alert(`${whatsapp.informacion()}. ${whatsapp.instalar()}`)
} else {
  alert("Opción incorrecta")
}
