const scrollHeader = document.querySelector('header')
const logoHeader = document.querySelector('#logo')

function activeScroll() {
   scrollHeader.classList.toggle('scroll', scrollY > 450)
}

window.addEventListener('scroll', activeScroll)
