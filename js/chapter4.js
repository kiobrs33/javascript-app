// CADENAS DE TEXTO

let palabraA = "Hello"
let palabraB = "Word my friend"

const result = palabraA.concat(palabraB)

let textA = " Bienvenido a la hermosa "

let resultA = textA.startsWith("B")

let resultB = textA.endsWith("osa")

let resultC = textA.includes("osa")

let resultD = textA.indexOf("xa")

let resultE = textA.lastIndexOf("her")

let resultF = textA.padStart(40, "rene")

let resultG = textA.padEnd(40, "lozano")

let resultH = textA.repeat(5)

let resultI = textA.split(" ", 1)

let resultJ = textA.substring(0, 6)

let resultK = textA.toLowerCase()

let resultL = textA.toUpperCase()

let resultM = textA.toString()

let resultN = textA.trim()

// ARRAYS

let frutas = [
  "manzana",
  "pera",
  "papaya",
  "mandarina",
  "naranja",
  "fresa",
  "platano"
]

// frutas.pop()

// frutas.shift()

// frutas.push("uva")

// frutas.reverse()

// frutas.unshift("cebolla", "zanahoria", "tomate")

// frutas.sort()

// frutas.splice(1, 5, "tomate")

// const stringFrutas = frutas.join()

// const frutasModificado = frutas.slice(0, 5)

// const frutasFiltrados = frutas.filter((item) => item.length < 5)

// const frutasForEach = frutas.forEach((item) => {
//   console.log(item)
// })

// MATH - OPERACIONES MATEMATICAS
const raizCuadrada = Math.sqrt(81)

console.log(raizCuadrada)
