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
console.log(location)
console.log(location.href)
console.log(location.protocol)
console.log(location.host)
console.log(location.hostname)
console.log(location.port)
console.log(location.pathname)


// Te manda a la pagina ESPECIFICADA
location.assign("https://youtube.com")
