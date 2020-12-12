let menu__icon = document.querySelector('.header__icon-menu');
let menu__close = document.querySelector('.modal-menu__icon--close');
let menu__modal = document.querySelector('.modal-menu');
let body = document.querySelector('body');


menu__icon.addEventListener('click', function ( ) {
  console.log("menu")
  menu__modal.style.transform = "translateX(0)";
  body.style.zIndex = "100";
//  body.style.overflow= "hidden"
})

menu__close.addEventListener('click', function ( ) {
  console.log("menu")
  menu__modal.style.transform = "translateX(-100%)";
  body.style.overflow= "visible"
})

menu__modal.addEventListener("click", function (  ) {
  console.log('work')
  menu__modal.style.transform = "translateX(-100%)";
  body.style.overflow= "visible"
})










