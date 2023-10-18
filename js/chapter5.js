console.log("CAPITULO 5 ")

// Metodos sobre la SELECCION DE ELEMENTOS

// Metodos TRADICIONALES
const textInput = document.getElementById("textInput")
const subtituloH3 = document.getElementsByClassName("subtituloH3")
const colorInput = document.getElementsByName("colorInput")
const parrafo = document.getElementsByTagName("p")

// console.log("Metodo Tradicionales")
// console.log(textInput)
// console.log(subtituloH3)
// console.log(colorInput)
// console.log(parrafo)

// Metodos MODERNOS
const textInputA = document.querySelector("#textInput")
const info = document.querySelector(".main .info")

const subtitulosH3 = document.querySelectorAll("subtituloH3")
const nicknames = document.querySelectorAll('[name="nickname"]')

// console.log("Metodos Modernos")
// console.log(textInputA)
// console.log(subtitulosH3)

// METODOS ATRIBUTO DE UN ELEMENTO

// Agregar un nuevo ATRIBUTO
// colorInput[0].setAttribute("type", "text")

// Remover un ATRIBUTO
// colorInput[0].removeAttribute("type")

// Obtener el VALOR de un ATRIBUTO
// console.log("Su tipo de atributo es: " + colorInput[0].getAttribute("type"))

// ALTERNA un ATRIBUTO BOOLEANO
const button = document.querySelector("#toggleButton")

button.addEventListener("click", () => {
  console.log("click")
  colorInput[0].toggleAttribute("disabled")
})

// ATRIBUTOS GLOBALES

const tituloDemoA = document.getElementById("tituloDemoA")
const botonDemoA = document.getElementById("buttonDemoA")

botonDemoA.addEventListener("click", () => {
  tituloDemoA.toggleAttribute("contentEditable")
})

const tituloDemoB = document.querySelector("#tituloDemoB")
const botonDemoB = document.getElementById("buttonDemoB")

botonDemoB.addEventListener("click", () => {
  // Se recomienda hacerlo desde CSS
  tituloDemoB.setAttribute("dir", "rtl")
  // tituloDemoB.setAttribute("dir", "ltr")
})

const tituloDemoC = document.querySelector("#tituloDemoC")
const botonDemoC = document.getElementById("buttonDemoC")

botonDemoC.addEventListener("click", () => {
  // Se recomienda hacerlo desde CSS
  tituloDemoC.toggleAttribute("hidden")
})

const tituloDemoD = document.querySelector("#tituloDemoD")
const botonDemoD = document.getElementById("buttonDemoD")

botonDemoD.addEventListener("click", () => {
  // Se recomienda hacerlo desde CSS
  tituloDemoD.setAttribute("style", "color: red")
})

const tituloDemoE = document.querySelector("#tituloDemoE")
const botonDemoE = document.getElementById("buttonDemoE")
tituloDemoE.setAttribute("tabindex", "0 ")

const tituloDemoF = document.querySelector("#tituloDemoF")
const botonDemoF = document.getElementById("buttonDemoF")
tituloDemoF.setAttribute("title", "Rene Lozano Ramos")

// ATRIBUTOS INPUTS
const inputExample = document.querySelector(".inputDemo")

// inputExample.value = "Rene Lozano Ramos"
// inputExample.className = "LozanoRamos"
// inputExample.type = "text"
// inputExample.maxLength = 10
inputExample.minLength = 5
inputExample.placeholder = "Write your name pls"
inputExample.required = true

// console.log("ATRIBUTOS INPUT")
// console.log(inputExample.className)
// console.log(inputExample.value)
// console.log(inputExample.type)

// ATTRIBUTTE STYLE
const welcomeH1 = document.querySelector(".welcomeH1")

welcomeH1.style.color = "#9c0c0c"
welcomeH1.style.backgroundColor = "#090"

// CLASSLIST Y METODOS
const classlistH1 = document.querySelector(".classlistH1")

// classlistH1.className = "alternativa"
// console.log(classlistH1)

classlistH1.classList.remove("classlistH1")
classlistH1.classList.add("anotherClass")
classlistH1.classList.toggle("visible")
classlistH1.classList.replace("classlistH1", "newClass")

let boolenaResp = classlistH1.classList.contains("visible")
// console.log(boolenaResp)

classlistH1.classList.add("foo", "bar", "baz")
classlistH1.classList.remove("foo", "bar", "baz")

const cls = ["red", "blue", "green"]
classlistH1.classList.add(...cls)
classlistH1.classList.remove(...cls)

// OBTENER TEXTO DE UNA ETIQUETA HTML
const tituloModificar = document.querySelector("#tituloModificar")

const innerHTML = tituloModificar.innerHTML
const innerText = tituloModificar.innerText
const textContent = tituloModificar.textContent
const outerHTML = tituloModificar.outerHTML

// console.log(innerHTML)
// console.log(innerText)
// console.log(textContent)
// console.log(outerHTML)

// CREACION DE ELEMENTOS
const newTitulo = document.createElement("h2")
const newContent = document.createTextNode("Bienvenido Neymar Jr")

// newTitulo.innerHTML = "<b style='color:red'>Bienvenido Mbappe</b>"
// newTitulo.innerHTML = "Hi Guy!"
newTitulo.appendChild(newContent)

const divContainer = document.querySelector("#contenedorA")
divContainer.appendChild(newTitulo)

// console.log(newTitulo)

// CREATE DOCUMENT FRAGMENT
const fragment = new DocumentFragment()
const listaA = document.querySelector("#listaA")

const apellidos = ["Lozano", "Ramos", "Diaz", "Flores", "Zambrano", "Pirlo"]

apellidos.forEach((apellido) => {
  const li = document.createElement("li")
  li.classList.add("grande")
  li.textContent = apellido
  fragment.appendChild(li)
})

listaA.appendChild(fragment)

// OBTENCION DE CHILDS
const containerB = document.querySelector(".contenedorB")
console.log(containerB.firstChild)
console.log(containerB.lastChild)
console.log(containerB.firstElementChild)
console.log(containerB.lastElementChild)
console.log(containerB.childNodes)

const elements = containerB.children

for (const elem of elements) {
  console.log(elem)
}

console.log(containerB.children)
