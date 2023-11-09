window.addEventListener('scroll', onScroll )

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)

}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2


    // verificar se a seção passou da linha
    // quais dados vou precisar?

    //o top da seção
    const sectionTop = section.offsetTop

    // a altura da seção
    const sectionHeight = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    //informlações dos dados e da lógica
    console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetline)

    //verificar se a base está abaixo da linha alvo
    // quais dados vou precisar?
    
    //a seção termina aonde?
    const sectionEndsAt = sectionTop + sectionHeight

    //o final da seção passou da linha alvo
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    console.log('o fundo da seção passou da linha?', sectionEndPassedTargetline)

    // limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}


function showNavOnScroll() {
    const list = document.getElementById("navigation").classList;
    if (scrollY > 0) {
        list.add('scroll')
    } else {
        list.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu () {
    document.body.classList.add('menu-expanded')
}

function closeMenu () {
    document.body.classList.remove('menu-expanded')
}


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home,
#home img,
#home .stats,
#service,
#services header,
#services .card
#about,
#about header,
#about .content`);