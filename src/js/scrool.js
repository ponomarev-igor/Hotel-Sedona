const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', oneMenuLinkClick);
  });
  function oneMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageXOffset - document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault()
    }
  }
}