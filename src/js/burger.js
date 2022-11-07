const burgerIcon = document.querySelector('.burger-icon');
const menuBody = document.querySelector('.menu__body');
if (burgerIcon) {
  burgerIcon.addEventListener('click', () => {
    document.body.classList.toggle('_lock')
    burgerIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}