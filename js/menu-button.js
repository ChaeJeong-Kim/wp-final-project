let hidden = true;
const menuButton = document.getElementById('menu-button');
const hiddenMenu = document.getElementById('hidden-menu');

menuButton.addEventListener('click', () => {
    if (hidden) {
        hiddenMenu.classList.remove('hidden');
        hidden = false;
    }
    else {
        hiddenMenu.classList.add('hidden');
        hidden = true;
    }
});