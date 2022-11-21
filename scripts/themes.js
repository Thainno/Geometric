const imgTheme = document.getElementById('img-theme')
const colors = ['Purple', 'Yellow', 'Blue', 'Green']

colors.forEach((color) => {
  document.getElementById(`theme${color}`).addEventListener('click', () => {
    document.body.removeAttribute('class')
    const tlc = color.toLowerCase()
    document.body.classList.toggle(tlc)
    imgTheme.setAttribute('src', `../images/images-geometric/${tlc}.png`)
  })
})