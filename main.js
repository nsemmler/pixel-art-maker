document.addEventListener('DOMContentLoaded', function () {
  const pixels = document.querySelectorAll('.pixel')
  const pixelArr = Array.from(pixels)

  pixelArr.forEach(pixel => {
    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = 'red'
    })
  })
})
