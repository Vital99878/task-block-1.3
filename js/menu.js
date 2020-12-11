let menu__icon = document.querySelector('.header__icon-menu');
let menu__close = document.querySelector('.header__icon--close-menu');
let menu__modal = document.querySelector('.modal-menu');
let body = document.querySelector('body');


menu__icon.addEventListener('click', function ( ) {
  console.log("menu")
  menu__modal.style.transform = "translateX(0px)";
  body.style.zIndex = "100";
})

menu__close.addEventListener('click', function ( ) {
  console.log("menu")
  menu__modal.style.transform = "translateX(-400px)";
})










