const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.head-nav');

burger.addEventListener('click', function () {
  burger.classList.toggle('is-active');
  nav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove('active');
    burger.classList.remove('is-active');
  }
});
