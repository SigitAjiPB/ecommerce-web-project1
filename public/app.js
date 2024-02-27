const hamburgerMenu = document.getElementById('hamburger-menu-js')
const headerSideNav = document.getElementById('header-side-nav')

hamburgerMenu.addEventListener('click', ()=> {
    headerSideNav.classList.toggle('hidden')
})

const sideBarCloseBtn = document.getElementById('side-bar-close-btn')

sideBarCloseBtn.addEventListener('click', ()=> {
    headerSideNav.classList.toggle('hidden')
})

//dropdown smartphone navbar
const smartphoneNav = document.getElementById('smartphone-nav')
const smartPhoneNavBtn = document.getElementById('smartphone-nav-a')
const smartphoneNavContent = document.getElementById('dropdown-smartphone-nav-content')

smartPhoneNavBtn.addEventListener('click', ()=> {
    smartphoneNavContent.classList.toggle('hidden')
    smartPhoneNavBtn.classList.toggle('focus:text-orange-500')
})