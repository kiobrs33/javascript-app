// Objeto WINDOW
// let windowPage

// const openWindow = () => {
//   windowPage = window.open("https://youtube.com")
// }
// const closeWindow = () => {
//   // Para generar este tipo de accion se debe tomar en cuentra 3 condiciones - Doc/Mozilla
//   windowPage.close()
// }
// const closedWindow = () => {
//   // Para generar este tipo de accion se debe tomar en cuentra 3 condiciones - Doc/Mozilla
//   console.log(windowPage.closed)
// }

// const buttonOpenWindow = document.getElementById("buttonOpenWindow")
// buttonOpenWindow.addEventListener("click", () => {
//   openWindow()
// })
// const buttonCloseWindow = document.getElementById("buttonCloseWindow")
// buttonCloseWindow.addEventListener("click", () => {
//   closeWindow()
// })
// const buttonClosedWindow = document.getElementById("buttonClosedWindow")
// buttonClosedWindow.addEventListener("click", () => {
//   closedWindow()
// })

// Para detener la carga de la pagina
// window.stop()

// Te genera una alerta
// window.alert('Hola Capitulo 6')

// Imprimir la vista de la pagina web - Abre un cuadro de DIALOGO
// window.print()

// Te pide un dato mediante un INPUT
// window.prompt('Dame una dato porfavor!')

// Ventana de confirmacion - Devuelve TRUE o FALSE
// window.confirm("Esta seguro que deseas salir del sitio web")

// Objeto SCREEN
// console.log(window.screen)

// // Alto de la ventana
// screen.availHeight

// // Ancho de la ventana
// screen.availWidth

// // Mide la distancia desde el borde IZQUIERDO de la pantalla y el borde IZQUIERDO de la ventana
// console.log(screenLeft)

// // Mide la distancia desde el borde SUPERIOR de la pantalla y el borde SUPERIOR de la ventana
// console.log(screenTop)

// // Muestra el desplazamiento ABSOLUTO en el EJE HORIZONTAL en PIXELES
// const scrolX = screenX

// // Muestra el desplazamiento ABSOLUTO en el EJE VERTICAL en PIXELES
// const scrolY = screenY

// // Te permite hacer DESPLAZAMIENTO en el eje X y Y
// // scroll(X,Y)
// scroll(0, 10000)

// // MODIFICAR EL TAMAÑO DE LA VENTANA
// ventanaA = window.open("https://youtube.com")

// // CRECE el TAMAÑO de la VENTANA
// ventanaA.resizeBy(200,200)

// // REDIMENSIONA el tamaño de la VENTANA
// ventanaA.resizeTo(200,200)

// Object LOCATION
// console.log(location)
// console.log(location.href)
// console.log(location.protocol)
// console.log(location.host)
// console.log(location.hostname)
// console.log(location.port)
// console.log(location.pathname)

// Te manda a la pagina ESPECIFICADA
// location.assign("https://youtube.com")

// Requeriemientos
// #1
// La pantalla debe ser almenos FULL HD
// Preguntarle  si esta seguro de comprar la pantalla

// #2
// Esta en modo pantalla completa "F11"
// Mostrar la URL
// Protocolo
// Mostrar datos del SITIO WEB

// const screenHeight = window.screen.availHeight
// const screenWidth = window.screen.availWidth

// const label1 = document.createElement("h2")
// const label2 = document.createElement("h2")

// const heightLabel = document.createTextNode(
//   `El alto de la pantalla es de: ${screenHeight}`
// )
// const widthLabel = document.createTextNode(
//   `El ancho de la pantalla es de: ${screenWidth}`
// )

// label1.appendChild(heightLabel)
// label2.appendChild(widthLabel)

// const containerA = document.querySelector("#container")

// containerA.appendChild(label1)
// containerA.appendChild(label2)

// console.log(screenHeight, screenWidth)

// const buttonBuy = document.querySelector("#buttonBuy")
// buttonBuy.addEventListener("click", () => {
//   const resp = confirm(
//     `¿Quieres comprar este monitor de ${screenHeight}x${screenWidth}?`
//   )

//   if (resp) {
//     alert("Producto comprado")
//   } else {
//     alert("Transaccion cancelada")
//   }
// })

// Ejercicio #2
const labelUrl = document.querySelector("#urlSite")
const labelProtocol = document.querySelector("#protocoloSite")
const labelHostName = document.querySelector("#nostnameSite")

console.log("location")
console.log(location)

const textLabelUrl = document.createTextNode(location.href)
labelUrl.appendChild(textLabelUrl)

const textLabelProtocol = document.createTextNode(location.protocol)
labelProtocol.appendChild(textLabelProtocol)

const textLabelHostName = document.createTextNode(location.hostname)
labelHostName.appendChild(textLabelHostName)


