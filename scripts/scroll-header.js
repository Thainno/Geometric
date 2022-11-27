const scrollHeader = document.querySelector('header')

function activeScroll() {
   scrollHeader.classList.toggle('scroll', scrollY > 450)
}

window.addEventListener('scroll', activeScroll)
