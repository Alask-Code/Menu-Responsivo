var darkmode = false
function toggleDark() {
    document.body.classList.toggle('dark-mode')
    if (!darkmode) {
        darkmode = true
        const darkModeText = document.querySelector('.dark-mode-text')
        const toggleDarkModeIcon = document.querySelector('.toggle-dark-mode')
        toggleDarkModeIcon.style.opacity = "0"
        darkModeText.style.opacity = "0"
        setTimeout(() => {
            darkModeText.innerHTML = "Modo Claro"
            darkModeText.style.opacity = "1"
            toggleDarkModeIcon.classList.remove('fa-moon')
            toggleDarkModeIcon.classList.add('fa-sun')
            toggleDarkModeIcon.style.opacity = "1"
        }, 250)
    }
    else {
        darkmode = false
        const darkModeText = document.querySelector('.dark-mode-text')
        const toggleDarkModeIcon = document.querySelector('.toggle-dark-mode')
        toggleDarkModeIcon.style.opacity = "0"
        darkModeText.style.opacity = "0"
        setTimeout(() => {
            darkModeText.innerHTML = "Modo Noturno"
            darkModeText.style.opacity = "1"
            toggleDarkModeIcon.classList.remove('fa-sun')
            toggleDarkModeIcon.classList.add('fa-moon')
            toggleDarkModeIcon.style.opacity = "1"
        }, 250)
    }
}