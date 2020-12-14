let menu__icon = document.querySelector('.header__icon-menu');
let menu__close = document.querySelector('.modal-menu__icon--close');
let menu__modal = document.querySelector('.modal-menu');

let feedback__msg = document.querySelector('.header__icon-chat');
let close__feedback = document.querySelector('.close-modal__feedback--msg');
let modal__msg = document.querySelector('.modal-feedback--msg');

let call__icon = document.querySelector('.header__icon-phone');
let menu__close__phone = document.querySelector('.close-modal--feedback--call');
let modal__call = document.querySelector('.modal-feedback--call');


let body = document.querySelector('body');

// Menu
menu__icon.addEventListener('click', function ( ) {
  console.log("menu")
  menu__modal.style.transform = "translateX(0)";
  body.style.zIndex = "100";
//  body.style.overflow= "scroll"
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

// Feedback message

feedback__msg.addEventListener('click', function ( ) {
  modal__msg.style.transform = "translateX(0)";
//  body.style.overflow= "hidden"
})

modal__msg.addEventListener('click', function ( ) {
  modal__msg.style.transform = "translateX(100%)";
})

modal__msg.addEventListener('click', function ( ) {
  modal__msg.style.transform = "translateX(100%)";
})

// FEEDBACK CALL
call__icon.addEventListener('click', function ( ) {
  console.log("phone")
  modal__call.style.transform = "translateX(0)";
})
modal__call.addEventListener('click', function ( ) {
  console.log("phone")
  modal__call.style.transform = "translateX(100%)";
})

menu__close__phone.addEventListener('click', function ( ) {
  console.log("menu__close__phone")
  modal__call.style.transform = "translateX(100%)";
})









