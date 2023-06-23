var darkmode = false
function toggleDark() {
    document.body.classList.toggle('dark-mode')
    if (!darkmode) {
        darkmode = true
        const toggleDarkModeIcon = document.querySelector('.toggle-dark-mode')
        toggleDarkModeIcon.style.opacity = "0"
        setTimeout(() => {
            toggleDarkModeIcon.classList.remove('fa-moon')
            toggleDarkModeIcon.classList.add('fa-sun')
            toggleDarkModeIcon.style.opacity = "1"
        }, 250)
    }
    else {
        darkmode = false
        const toggleDarkModeIcon = document.querySelector('.toggle-dark-mode')
        toggleDarkModeIcon.style.opacity = "0"
        setTimeout(() => {
            toggleDarkModeIcon.classList.remove('fa-sun')
            toggleDarkModeIcon.classList.add('fa-moon')
            toggleDarkModeIcon.style.opacity = "1"
        }, 250)
    }
}