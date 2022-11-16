let imgTheme = document.querySelector('#img-theme')

let themePurple = document.querySelector('#themePurple').addEventListener('click', () => {
    document.body.removeAttribute('class')
    document.body.classList.toggle('purple')
    imgTheme.setAttribute('src', '../images-geometric/purple.png')
})

let themeYellow = document.querySelector('#themeYellow').addEventListener('click', () => {
    document.body.removeAttribute('class')
    document.body.classList.toggle('yellow')
    imgTheme.setAttribute('src', '../images-geometric/yellow.png')
})

let themeBlue = document.querySelector('#themeBlue').addEventListener('click', () => {
    document.body.removeAttribute('class')
    document.body.classList.toggle('blue')
    imgTheme.setAttribute('src', '../images-geometric/blue.png')
})

let themeGreen = document.querySelector('#themeGreen').addEventListener('click', () => {
    document.body.removeAttribute('class')
    document.body.classList.toggle('green')
    imgTheme.setAttribute('src', '../images-geometric/green.png')
})