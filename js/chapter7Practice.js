const nombre = document.getElementById("nombre")
const correo = document.querySelector("#correo")
const nombreMateria = document.querySelector("#nombreMateria")

const spanNombre = document.querySelector("#validarNombre")
const spanCorreo = document.querySelector("#validarCorreo")
const spanNombreMateria = document.querySelector("#validarNombreMateria")
const spanForm = document.querySelector(".validarFormulario")

const buttonSubmit = document.querySelector(".button-submit")

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault()

  const cls = ["error", "successful"]
  spanNombre.classList.remove(...cls)
  spanCorreo.classList.remove(...cls)
  spanNombreMateria.classList.remove(...cls)
  spanForm.classList.remove(...cls)

  spanNombre.innerHTML = ""
  spanCorreo.innerHTML = ""
  spanNombreMateria.innerHTML = ""
  spanForm.innerHTML = ""

  let pasoFormulario = true

  // Expresiones regulares
  let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

  if (nombre.value.length < 5) {
    spanNombre.innerHTML = "El nombre no es correcto"
    spanNombre.classList.add("error")
    pasoFormulario = false
  } else {
    spanNombre.innerHTML = "Validado"
    spanNombre.classList.add("successful")
  }

  if (!regexEmail.test(correo.value)) {
    spanCorreo.innerHTML = "El correo no es correcto"
    spanCorreo.classList.add("error")
    pasoFormulario = false
  } else {
    spanCorreo.innerHTML = "Validado"
    spanCorreo.classList.add("successful")
  }

  if (nombreMateria.value.length < 5) {
    spanNombreMateria.innerHTML = "El nombre de la materia no es correcto"
    spanNombreMateria.classList.add("error")
    pasoFormulario = false
  } else {
    spanNombreMateria.innerHTML = "Validado"
    spanNombreMateria.classList.add("successful")
  }

  if (pasoFormulario) {
    spanForm.innerHTML = "Datos enviados correctamente"
    spanForm.classList.add("successful")
  }
  // nombre.focus()
})
