export const mainMenu = document.getElementById('mainMenu');
export const menu = document.querySelector('.modalMenu');
export const toggleMenu = function () {
    menu.classList.toggle('open');
    mainMenu.classList.toggle('third__inputActive')
}