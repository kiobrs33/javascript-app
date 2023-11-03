console.log("practice 7")

const nombre = document.querySelector("#nombre").value
const correo = document.querySelector("#correo").value
const nombreMateria = document.querySelector("#nombreMateria").value

const buttonSubmit = document.querySelector(".button-submit")

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  console.log(nombre, correo, nombreMateria)
})
