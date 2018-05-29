const arr = Array.from(Array(7500).keys())
const canvas = document.querySelector('.canvas')

arr.forEach(elmt => {
  canvas.innerHTML += '<div class="pixel"></div>'
})


document.addEventListener('DOMContentLoaded', function () {
  // Pixel turns red when you click it
  const pixels = document.querySelectorAll('.pixel')
  const pixelArr = Array.from(pixels)

  pixelArr.forEach(pixel => {
    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = 'red'
    })
  })


  // currentColor saves color in palette when clicked
  const colors = document.querySelectorAll('.color')
  const colorsArr = Array.from(colors)
  let currentColor

  colorsArr.forEach(color => {
    color.addEventListener('click', () => {
      currentColor = color.classList[1]
      console.log(currentColor)
    })
  })
})
