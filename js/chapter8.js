const buttonNota = document.querySelector("#button-nota")

buttonNota.addEventListener("click", (e) => {
  e.preventDefault()
  const inputNota = document.querySelector("#valor-nota").value
  const msgNota = document.querySelector("#msg-nota")

  msgNota.innerHTML = ""

  try {
    const nota1 = vertificarNota(8)
    const nota2 = vertificarNota(9)
    const nota3 = vertificarNota(inputNota)

    const promedio = promedioNotas(nota1, nota2, nota3)
    const msg = smsPromedio(promedio)

    msgNota.innerHTML = msg

    if (isNaN(promedio)) {
      throw "Error en el promedio"
    }
  } catch (error) {
    console.log(error)
  }
})

const vertificarNota = (nota) => {
  if (
    nota === NaN ||
    nota === null ||
    parseInt(nota) < 0 ||
    parseInt(nota) > 10 ||
    !typeof nota === "string"
  ) {
    return NaN
  }

  return parseInt(nota)
}

const smsPromedio = (notaPromedio) => {
  let sms = ""

  switch (notaPromedio) {
    case 1:
      sms = `Pésima nota ${notaPromedio}/10`
      break
    case 2:
      sms = `Pésima nota ${notaPromedio}/10`
      break
    case 3:
      sms = `Pésima nota ${notaPromedio}/10`
      break
    case 4:
      sms = `Pésima nota ${notaPromedio}/10`
      break
    case 5:
      sms = `Pésima nota ${notaPromedio}/10`
      break
    case 6:
      sms = `Mala nota ${notaPromedio}/10`
      break
    case 7:
      sms = `Mala nota ${notaPromedio}/10`
      break
    case 8:
      sms = `Buena nota ${notaPromedio}/10`
      break
    case 9:
      sms = `Buena nota ${notaPromedio}/10`
      break
    case 10:
      sms = `Excelente nota ${notaPromedio}/10`
      break
    default:
      sms = "Nota erronea o fuera de rango 10"
      break
  }

  return sms
}

const promedioNotas = (nota1, nota2, nota3) => {
  let promedio = (nota1 + nota2 + nota3) / 3
  return parseInt(promedio)
}
