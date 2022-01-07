// elements
let menu = document.getElementById("menu")
let menuClosed = document.getElementById("closeMenu")

// click events

menu.addEventListener('click', () => {
    document.body.classList.toggle('menuOpen')
    document.body.classList.toggle('menuClosed')
})
menuClosed.addEventListener('click', () => {
    document.body.classList.toggle('menuOpen')
    document.body.classList.toggle('menuClosed')
})
