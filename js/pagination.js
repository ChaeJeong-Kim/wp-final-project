const pages = document.querySelectorAll('.page');
const mainPhotos = document.querySelectorAll('.main-photo');

function selectPage(e) {
    removeBorder();
    removeShow();
    this.classList.add('current-page');
    const mainPhoto = document.querySelector(`#${this.id}-content`);
    mainPhoto.classList.add('show');
}
function removeBorder(){
    pages.forEach(item => item.classList.remove('current-page'));
}
function removeShow(){
    mainPhotos.forEach(item => item.classList.remove('show'));
}

pages.forEach(item => item.addEventListener('click',selectPage));


