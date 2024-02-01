const mainMenuBtn = document.querySelector('.main-menu-btn');
const mainMenu = document.querySelector('.main-menu-overlay');

if (mainMenuBtn != null) {
    mainMenuBtn.addEventListener('click', mainMenuSwitcher);
}

function mainMenuSwitcher() {
    if (mainMenuBtn.classList.contains('on')) {
        mainMenuClose();
        mainMenuBtn.classList.remove('on');
    } else {
        mainMenuShow();
        mainMenuBtn.classList.add('on');
    }
}

function mainMenuShow() {
    mainMenu.classList.add('show');
    setTimeout(() => {
        mainMenu.classList.add('a');
    }, 10);
}

function mainMenuClose() {
    mainMenu.classList.remove('a');
    setTimeout(() => {
        mainMenu.classList.remove('show');
    }, 250);
}