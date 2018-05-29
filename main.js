const arr = Array.from(Array(4000).keys())
const canvas = document.querySelector('.canvas')
let currentColor

arr.forEach(elmt => {
  canvas.innerHTML += '<div class="pixel"></div>'
})

document.addEventListener('DOMContentLoaded', () => {
  const pixelArr = Array.from(document.querySelectorAll('.pixel'))
  const colorsArr = Array.from(document.querySelectorAll('.color'))

  pixelArr.forEach(pixel => {
    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = currentColor
    })
  })

  colorsArr.forEach(color => {
    color.addEventListener('click', () => {
      currentColor = color.classList[1]
      const selectedColorSwatch = document.querySelector('.selected-color')
      selectedColorSwatch.setAttribute('style', `background-color: ${currentColor}`)
    })
  })
})
