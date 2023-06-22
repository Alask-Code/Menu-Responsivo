var darkmode = false
function toggleDark() {
    const content = document.querySelector('.card')
    const toggleIcon = document.querySelector('.dark-icon')
    if (darkmode == false) {
        darkmode = true
        content.classList.add('dark')
        toggleIcon.style.opacity = "0"
        setTimeout(() => {
            document.body.classList.toggle('dark-mode')
            toggleIcon.classList.remove('fa-moon')
            toggleIcon.classList.add('fa-sun')
            toggleIcon.style.opacity = "1"
        }, 250)

    }
    else {
        darkmode = false
        toggleIcon.style.opacity = "0"
        content.classList.remove('dark')
        document.body.classList.toggle('dark-mode')
        setTimeout(() => {
            toggleIcon.classList.remove('fa-sun')
            toggleIcon.classList.add('fa-moon')
            toggleIcon.style.opacity = "1"
        }, 250)
    }
}
function exit() {
    const contentWrapper = document.querySelector('.menu')
    const exitMenu = document.querySelector('.exit-menu')
    exitMenu.style.height = contentWrapper.clientHeight + "px"
    contentWrapper.style.transform = "translateX(-60px)"
    contentWrapper.style.opacity = "0"
    setTimeout(() => {
        contentWrapper.style.display = "none"
        exitMenu.style.display = "flex"
        setTimeout(() => {
            exitMenu.style.opacity = "1"
            exitMenu.style.transform = "translate(0)"

        }, 250)

    }, 250)
}

function returnBack() {
    const contentWrapper = document.querySelector('.menu')
    const exitMenu = document.querySelector('.exit-menu')
    exitMenu.style.transform = "translateX(-60px)"
    exitMenu.style.opacity = "0"
    setTimeout(() => {
        exitMenu.style.display = "none"
        contentWrapper.style.display = "flex"
        setTimeout(() => {
            contentWrapper.style.opacity = "1"
            contentWrapper.style.transform = "translateX(0px)"
        }, 250)

    }, 250)
}