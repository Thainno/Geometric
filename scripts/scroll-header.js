const scrollHeader = document.querySelector('header')
const logoHeader = document.querySelector('#logo')


function activeScroll() {
    if (scrollHeader.classList.toggle('scroll', scrollY > 90)) {
        logoHeader.setAttribute('src', '../images/logo/purple-logo.svg')
        scrollHeader.style.cssText = 'border-color: #070568'
    } else {
        logoHeader.setAttribute('src', '../images/logo/white-logo.svg')
        scrollHeader.style.cssText = 'border-color: #ffffff'
    }
}

window.addEventListener('scroll', activeScroll)
