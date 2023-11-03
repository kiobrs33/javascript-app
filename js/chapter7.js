// EVENTS
// Tres formas de usar EVENTS

const buttonEnviar = document.querySelector(".button-enviar")

// El metodo mas recomendado - LISTENER
buttonEnviar.addEventListener("click", () => {
  console.log("Enviar datos del Formulario - 1")
})

buttonEnviar.addEventListener("click", sendData)

function sendData(e) {
  console.log("Enviar datos del Formulario - 2")
  console.log(e.target)
}

// Metodo no recomendado - OBJECTO EVENT
buttonEnviar.onclick = () => {
  console.log("onClick")
}

// Metodo no recomendado en html - HANDLERS
// <button onclick="alert('Hello, this is my old-fashioned event handler!');">
//  Press me
// </button>

// FLUJO DE EVENTOS
const containerA = document.querySelector(".containerA")
const containerB = document.querySelector(".containerB")
const titleA = document.querySelector(".titleA")

containerA.addEventListener(
  "click",
  () => {
    alert("Click ContainerA")
  },
  true
)

// Detener el flujo o la PROPAGACIONDE VARIOS EVENTOS
containerB.addEventListener(
  "click",
  (e) => {
    alert("Click ContainerB")
    e.stopPropagation()
  },
  true
)

titleA.addEventListener(
  "click",
  () => {
    alert("Click TitleA")
  },
  true
)

// MOUSE EVENTS
const containerC = document.querySelector(".containerC")
// containerC.addEventListener("click", () => {
//   console.log("container C - Click")
// })

// containerC.addEventListener("dblclick", () => {
//   console.log("container C - dblClick")
// })

// containerC.addEventListener("mouseover", () => {
//   console.log("container C - mouseover")
// })

// containerC.addEventListener("mouseout", () => {
//   console.log("container C - mouseout")
// })

// containerC.addEventListener("contextmenu", () => {
//   console.log("container C - contextmenu")
// })

// containerC.addEventListener("mouseenter", () => {
//   console.log("container C - mouseenter")
// })

// containerC.addEventListener("mouseleave", () => {
//   console.log("container C - mouseleave")
// })

// containerC.addEventListener("mouseup", () => {
//   console.log("container C - mouseup")
// })

// containerC.addEventListener("mousemove", () => {
//   console.log("container C - mousemove")
// })

// EVENT KEY
// const inputExample = document.querySelector(".input-example")

// inputExample.addEventListener("keydown", (e) => {
//   console.log("Se presiono la tecla")
// })

// inputExample.addEventListener("keypress", (e) => {
//   console.log("Se presiono y solto tecla")
// })

// inputExample.addEventListener("keyup", (e) => {
//   console.log("Se solto la tecla")
// })

// TIMERS
// let cont = 0
// const intervalFun = setInterval(() => {
//   cont++
//   console.log("Hola ", cont)
// }, 1000)

// setTimeout(() => {
//   console.log("Hola mundo!")
//   clearInterval(intervalFun)
// }, 5000)
