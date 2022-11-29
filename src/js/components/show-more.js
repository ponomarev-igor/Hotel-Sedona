const showMore = document.querySelector('.show-more');
const productsLenght = document.querySelectorAll('.gallery__item').length;
let items = 4;
if (showMore) {
  showMore.addEventListener('click', () => {
    items += 4;
    const array = Array.from(document.querySelector('.gallery').children);
    const visiblItems = array.slice(0, items);

    visiblItems.forEach(el => el.classList.add('is-visible'));

    if (visiblItems.length === productsLenght) {
      showMore.style.display = 'none'
    }
  });
};

