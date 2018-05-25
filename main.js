document.addEventListener('DOMContentLoaded', function () {
  const pixels = document.querySelectorAll('.pixel')
  const pixelArr = Array.from(pixels)

  pixelArr.forEach(pixel => {
    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = 'red'
    })
  })

  const colors = document.querySelectorAll('.color')
  const colorsArr = Array.from(colors)
  let currentColor

  colorsArr.forEach(color => {
    color.addEventListener('click', () => {
      currentColor = color.classList[1]
    })
  })
})
