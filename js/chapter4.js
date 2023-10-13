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

const raizCubica = Math.cbrt(64)

const numbers = [1, 14, -5, 34, 99, 105]
const numberMax = Math.max(...numbers)

const numberMin = Math.min(...numbers)

const numberRandom = Math.random() * 10

const numberRound = Math.round(5.45)

// Devuelve la representación flotante de precisión simple de 32 bits
const numberFround = Math.fround(1.05)

const numberFloor = Math.floor(5.95)

const numberTrunc = Math.trunc(5.76)

// console.log(raizCuadrada)
// console.log(raizCubica)
// console.log(numberMax)
// console.log(numberMin)
// console.log(numberRandom)
// console.log(numberRound)
// console.log(numberFround)
// console.log(numberFloor)
// console.log(numberTrunc)

// EJERCICIO
// Suma
// Resta
// Potencia
// Multiplicacion
// Divison
// Raiz Cuadrada
// Raiz Cubica

class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber
    this.secondNumber = secondNumber
  }

  suma() {
    return this.firstNumber + this.secondNumber
  }

  resta() {
    return this.firstNumber - this.secondNumber
  }

  multiplicacion() {
    return this.firstNumber * this.secondNumber
  }

  division() {
    return this.firstNumber / this.secondNumber
  }

  resto() {
    return this.firstNumber % this.secondNumber
  }

  potencia(exponente) {
    return this.firstNumber ** exponente
  }

  raizCuadrada() {
    return Math.sqrt(this.firstNumber)
  }

  raizCubica() {
    return Math.cbrt(this.firstNumber)
  }
}

const resultCal = new Calculator(4, 5)

// console.log("Here Guy!")
// console.log(resultCal.suma())
// console.log(resultCal.resta())
// console.log(resultCal.division())
// console.log(resultCal.multiplicacion())
// console.log(resultCal.resto())
// console.log(resultCal.potencia(3))
// console.log(resultCal.raizCuadrada())
// console.log(resultCal.raizCubica())

// MATERIAS O CURSOS COFLA

const cursos = [
  "Comunicacion",
  "Fisica",
  "Calculo",
  "Razonamiento Logico",
  "Literatura"
]

const profesores = ["Mario", "Jose", "Carla", "Camila", "Henry"]

const alumnos = [
  "Pepe",
  "Lucia",
  "Lidia",
  "Marina",
  "Yovana",
  "Asly",
  "Anthony",
  "Kevin",
  "Johan",
  "Miguel"
]

const curso = (nombreCurso) => {
  const numberRandom = Math.random() * (profesores.length - 1)
  const indiceProfesor = Math.round(numberRandom)
  const profesor = profesores[indiceProfesor]

  let alumnosRandom = []
  let cont = 1

  while (cont <= 3) {
    const numRandom = Math.random() * (alumnos.length - 1)
    const indiceAlumno = Math.round(numRandom)
    const alumno = alumnos[indiceAlumno]
    const result = alumnosRandom.filter((item) => item == alumno)

    if (result.length == 0) {
      alumnosRandom.push(alumno)
      cont++
    }
  }

  console.log(
    `Su curso es: ${nombreCurso}, su docente es: ${profesor} y los alumnos son ${alumnosRandom}`
  )
}

const clasesAlumno = () => {
  const numRandom = Math.random() * (cursos.length - 1)
  const numClases = Math.round(numRandom)

  const numberRandom = Math.random() * (profesores.length - 2) + 1
  const indiceProfesor = Math.round(numberRandom)
  const profesor = profesores[indiceProfesor]

  console.log(`Profesor ${profesor} y el total de clases ${numClases}`)
}

// curso(cursos[2])
// clasesAlumno()

class Inscripcion {
  inscribirse() {
    const nombreMateria = prompt("¿En que materia deseas inscribirse?")
    // const nombreMateria = "Matematica"

    const min = 15
    const max = 20
    const numRadom = Math.round(Math.random() * (max - min) + min)

    if (numRadom < 20) {
      alert(
        `Su inscripcion fue exitosa en la materia de ${nombreMateria} y ${numRadom} alumnos`
      )
    } else {
      alert(
        `Se acabaron los cupos para esta materia: ${nombreMateria} cupos: ${numRadom}`
      )
    }
  }
}

const inscripcionMateria = new Inscripcion()

inscripcionMateria.inscribirse("Matematica")
