const hamburgerMenu = document.getElementById('hamburger-menu-js')
const headerSideNav = document.getElementById('header-side-nav')

hamburgerMenu.addEventListener('click', ()=> {
    headerSideNav.classList.toggle('hidden')
})

const sideBarCloseBtn = document.getElementById('side-bar-close-btn')

sideBarCloseBtn.addEventListener('click', ()=> {
    headerSideNav.classList.toggle('hidden')
})