console.log("CAPITULO 5 ")

// Metodos sobre la SELECCION DE ELEMENTOS

// Metodos TRADICIONALES
const textInput = document.getElementById("textInput")
const subtituloH3 = document.getElementsByClassName("subtituloH3")
const colorInput = document.getElementsByName("colorInput")
const parrafo = document.getElementsByTagName("p")

console.log("Metodo Tradicionales")
console.log(textInput)
console.log(subtituloH3)
console.log(colorInput)
console.log(parrafo)

// Metodos MODERNOS
const textInputA = document.querySelector("#textInput")
const info = document.querySelector(".main .info")

const subtitulosH3 = document.querySelectorAll("subtituloH3")
const nicknames = document.querySelectorAll('[name="nickname"]')

console.log("Metodos Modernos")
console.log(textInputA)
console.log(subtitulosH3)
