const toggleIcon = document.querySelector('.icon')
const content = document.querySelector('.card')
var darkmode = false
function toggleDark() {
    if (darkmode == false) {
        toggleIcon.style.opacity = "0"
        document.body.classList.toggle('dark-mode')
        setTimeout(() => {
            toggleIcon.classList.remove('fa-moon')
            toggleIcon.classList.add('fa-sun')
            toggleIcon.style.opacity = "1"
        }, 250)

        content.classList.add('dark')
        darkmode = true
    } else {
        toggleIcon.style.opacity = "0"
        document.body.classList.toggle('dark-mode')
        setTimeout(() => {
            toggleIcon.classList.remove('fa-sun')
            toggleIcon.classList.add('fa-moon')
            toggleIcon.style.opacity = "1"
        }, 250)

        content.classList.remove('dark')
        darkmode = false
    }
}