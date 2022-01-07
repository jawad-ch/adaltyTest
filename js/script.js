// elements
let menu = document.getElementById("menu")
let menuClosed = document.getElementById("closeMenu")
let aside = document.getElementById("aside")

// click events

menu.addEventListener('click', () => {
    document.body.classList.toggle('menuOpen')
    document.body.classList.toggle('menuClosed')
    aside.classList.toggle('open')
})
menuClosed.addEventListener('click', () => {
    document.body.classList.toggle('menuOpen')
    document.body.classList.toggle('menuClosed')
        aside.classList.toggle('open')

})
