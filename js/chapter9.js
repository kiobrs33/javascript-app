// CALLBACKS
// function demo1(callback) {
//   callback("Rene Lozano")
// }

// function nombre(nombre) {
//   console.log("Su nombre es : " + nombre)
// }

// demo1(nombre)

// PROMESAS
const isMan = false

const promise = new Promise((resolve, reject) => {
  if (!isMan) reject("No es hombre")
  else resolve("Es hombre")
})

promise
  .then((resp) => {
    console.log("resolve => ", resp)
  })
  .catch((err) => {
    console.log("error => ", err)
  })

// ASYNC and AWAIT
const getUsers = async () => {
  try {
    const resp = await fetch("www.datos.com")
    const json = await resp
    console.log(json)
  } catch (error) {
    console.log(error)
  }
}
