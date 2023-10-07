function verifyAge(time) {
  let age = prompt("¿Cual es tu edad?")

  if (age >= 18) {
    if (time > 2 && time <= 8) {
      alert("No paga la entrada")
    } else {
      alert("Debe pagar la entrada")
    }
  } else {
    alert("Eres menor de edad, no puedes ingresar.")
  }
}

// verifyAge(23)

function checkAttendance(days) {
  let presents = []
  let lackAssistance = days * 0.1
  let absences = 0

  for (let index = days; index >= 1; index--) {
    let check = prompt("Presione => 1 (Presente), Presione => 0 (Falta)")
    if (check == 1) {
      presents.push(true)
    } else {
      presents.push(false)
    }
  }

  for (const present of presents) {
    if (!present) {
      absences++
    }
  }

  if (absences > lackAssistance) {
    alert("Desaprobado")
  } else {
    alert("Aprobado")
  }
}

// checkAttendance(10)

function calculator() {
  const numberA = parseInt(prompt("Inserte el primer número"))
  const numberB = parseInt(prompt("Inserte el segundo númnero"))

  const operation = prompt(
    "Escoja la operacion: 1-Suma. 2-Resta. 3-Multiplicación. 4-Division, 5-Resto"
  )

  if (operation == 1) {
    alert(`La suma de ${numberA} y ${numberB} es: ${numberA + numberB}`)
  } else if (operation == 2) {
    alert(`La resta de ${numberA} y ${numberB} es: ${numberA - numberB}`)
  } else if (operation == 3) {
    alert(
      `La multiplicación de ${numberA} y ${numberB} es: ${numberA * numberB}`
    )
  } else if (operation == 4) {
    alert(`La divsión de ${numberA} y ${numberB} es: ${numberA / numberB}`)
  } else if (operation == 2) {
    alert(`El residuo de ${numberA} entre ${numberB} es: ${numberA % numberB}`)
  } else {
    alert("Escoja la operacion correcta")
  }
}

// calculator()
