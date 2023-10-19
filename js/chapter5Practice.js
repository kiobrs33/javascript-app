class Key {
  constructor(id, name, model, price, urlImg) {
    this.id = id
    this.name = name
    this.model = model
    this.price = price
    this.urlImg = urlImg
  }

  createElementHtml() {
    const containerHtml = document.createElement("div")
    const imgHtml = document.createElement("img")
    const titleHtml = document.createElement("h2")
    const modelHtml = document.createElement("p")
    const priceHtml = document.createElement("p")

    containerHtml.classList.add("item")
    containerHtml.tabIndex = this.id

    containerHtml.addEventListener("click", () => {
      document.querySelector("#input-key").value = this.id
    })

    imgHtml.classList.add("img-item", `key-${this.id}`)
    imgHtml.setAttribute("src", this.urlImg)

    titleHtml.classList.add("title-item")
    titleHtml.innerHTML = this.name

    modelHtml.classList.add("model-item")
    modelHtml.innerHTML = `Model: <b>${this.model}</b>`

    priceHtml.classList.add("price-item")
    priceHtml.innerHTML = `Price: <b>S/.${this.price}.00</b>`

    containerHtml.appendChild(imgHtml)
    containerHtml.appendChild(titleHtml)
    containerHtml.appendChild(modelHtml)
    containerHtml.appendChild(priceHtml)

    return containerHtml
  }
}

const generateInformationRandom = (quantity) => {
  const fragmentContainer = document.createDocumentFragment()

  for (let index = 1; index <= quantity; index++) {
    const name = `Llave ${index}`
    const model = `MH-${Math.round(Math.random() * 1000)}`
    const price = Math.round(Math.random() * 60 + 20)
    const urlImg = `../images/key${Math.round(Math.random() * 3 + 1)}.png`

    const key = new Key(index, name, model, price, urlImg)
    const keyElement = key.createElementHtml()

    fragmentContainer.appendChild(keyElement)
  }
  return fragmentContainer
}

const container = document.querySelector("#container")
const arrayFragment = generateInformationRandom(20)

container.appendChild(arrayFragment)
