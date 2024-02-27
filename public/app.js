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
const smartphoneNavSymbol = document.getElementById('smartphone-nav-symbol')

smartPhoneNavBtn.addEventListener('click', ()=> {
    smartphoneNavContent.classList.toggle('hidden')
    smartPhoneNavBtn.classList.toggle('focus:text-orange-500')

    if(smartphoneNavSymbol.textContent === 'add') {
        smartphoneNavSymbol.textContent = 'remove'
    } else {
        smartphoneNavSymbol.textContent = 'add'
    }
})

//dropdown smartHome navbar
const smartHomeNavBtn = document.getElementById('smarthome-nav-a')
const smartHomeDropdownContent = document.getElementById('smarthome-dropdown-nav')
const smartHomeNavSymbol = document.getElementById('smarthome-nav-symbol')

smartHomeNavBtn.addEventListener('click', ()=> {
    smartHomeDropdownContent.classList.toggle('hidden')
    smartHomeNavBtn.classList.toggle('focus:text-orange-500')

    if(smartHomeNavSymbol.textContent === 'add') {
        smartHomeNavSymbol.textContent = 'remove'
    } else {
        smartHomeNavSymbol.textContent = 'add'
    }
})

//dropdown lifestyle navbar
const lifestyleNavBtn = document.getElementById('lifestyle-nav-a')
const lifestyleNavContent = document.getElementById('lifestyle-nav-content')
const lifestyleNavSymbol = document.getElementById('lifestyle-nav-symbol')

lifestyleNavBtn.addEventListener('click', ()=> {
    lifestyleNavContent.classList.toggle('hidden')
    lifestyleNavBtn.classList.toggle('focus:text-orange-500')
    
    if(lifestyleNavSymbol.textContent === 'add') {
        lifestyleNavSymbol.textContent = 'remove'
    } else {
        lifestyleNavSymbol.textContent = 'add'
    }
})