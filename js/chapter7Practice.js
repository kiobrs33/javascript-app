const nombre = document.getElementById("nombre")
const correo = document.querySelector("#correo")
const nombreMateria = document.querySelector("#nombreMateria")

const spanNombre = document.querySelector("#validarNombre")
const spanCorreo = document.querySelector("#validarCorreo")
const spanNombreMateria = document.querySelector("#validarNombreMateria")

const buttonSubmit = document.querySelector(".button-submit")

// Expresiones regulares

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault()

  let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

  if (nombre.value.length < 5) {
    spanNombre.innerHTML = "El nombre no es correcto"
    spanNombre.className
  }
  if (!regexEmail.test(correo.value)) {
    spanCorreo.innerHTML = "El correo no es correcto"
  }
  if (nombreMateria.value.length < 5) {
    spanNombreMateria.innerHTML = "El nombre de la materia no es correcto"
  }

  // nombre.focus()
})
