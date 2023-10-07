// Ejecicio 1
let priceA = prompt("Ingresar el monto :")
let resultA = 0

if (priceA >= 0.6) {
  if (priceA >= 1) {
    if (priceA >= 1.6) {
      if (priceA >= 1.7) {
        if (priceA >= 1.8) {
          if (priceA >= 2.9) {
            if (priceA >= 2.9) {
              resultA = priceA - 2.9
              alert(
                `Pote de 1/4 KG: $2.9 mas Potecito de helado con confites: $2.9 y su vuelto es: ${resultA}`
              )
            }
          } else {
            resultA = priceA - 1.8
            alert(
              `Bombom helado marca helardo: $1.8 y su vuelto es: ${resultA}`
            )
          }
        } else {
          resultA = priceA - 1.7
          alert(
            `Bombon helado marca heladovich: $1.7 y su vuelto es: ${resultA}`
          )
        }
      } else {
        resultA = priceA - 1.6
        alert(`Bombom helado marca heladix: $1.6 y su vuelto es: ${resultA}`)
      }
    } else {
      resultA = priceA - 1
      alert(`Palito de helado de crema: $1.0 y su vuelto es: ${resultA}`)
    }
  } else {
    resultA = priceA - 0.6
    alert(`Palito de helado de agua: $0.6 y su vuelto es: ${resultA}`)
  }
}

// Ejercicio 2
let priceB = prompt("Ingresar el monto :")
let resultB = 0

if (priceB >= 1 && priceB < 2) {
  resultB = priceB - 1
  alert(`Compró 1 boleto y su vuelto es: ${resultB}`)
} else if (priceB >= 2 && priceB < 3) {
  resultB = priceB - 2
  alert(`Compró 2 boletos y su vuelto es: ${resultB}`)
} else if (priceB >= 3) {
  resultB = priceB - 3
  alert(`Compró 3 boletos y su vuelto es: ${resultB}`)
}
