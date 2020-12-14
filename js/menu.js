let menu__icon = document.querySelector('.header__icon-menu');

let feedback_icon = document.querySelector('.header__icon-phone');
let close__feedback = document.querySelector('.close-modal__feedback');
let modal__feedback = document.querySelector('.modal-feedback');
let menu__close = document.querySelector('.modal-menu__icon--close');
let menu__modal = document.querySelector('.modal-menu');
let body = document.querySelector('body');


menu__icon.addEventListener('click', function ( ) {
  console.log("menu")
  menu__modal.style.transform = "translateX(0)";
  body.style.zIndex = "100";
//  body.style.overflow= "scroll"
})

feedback_icon.addEventListener('click', function ( ) {
  modal__feedback.style.transform = "translateX(0)";
//  body.style.overflow= "hidden"
})

close__feedback.addEventListener('click', function ( ) {
  modal__feedback.style.transform = "translateX(100%)";

})
modal__feedback.addEventListener('click', function ( ) {
  modal__feedback.style.transform = "translateX(100%)";
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










