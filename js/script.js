// elements
let toggleIcon = document.querySelector(".toggle-icon")

// click events

toggleIcon.addEventListener('click', () => {
    document.body.classList.toggle('menuOpen')
    document.body.classList.toggle('menuClosed')
})
