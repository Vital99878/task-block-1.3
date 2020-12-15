let menu__icon = document.querySelector ('.menu-icon');
let menu__close = document.querySelector ('.close-icon--menu');
let menu__modal = document.querySelector ('.modal-menu');

let msg_icons = document.querySelectorAll ('.msg-icon');
let close_icon_feedback = document.querySelector ('.close-icon--feedback');
let feedback_body = document.querySelector ('.modal-feedback--msg');

let call__icons = document.querySelectorAll ('.phone-icon');
let menu__close__phone = document.querySelector ('.close-icon--order');
let modal__call = document.querySelector ('.modal-feedback--call');

// Menu
menu__icon.addEventListener ('click', function () {
  console.log ("menu")
  menu__modal.style.transform = "translateX(0)";

//  body.style.overflow= "scroll"
})

menu__close.addEventListener ('click', function () {
  menu__modal.style.transform = "translateX(-100%)";
})

function add_listener (icons, body) {
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener ('click', function () {
      body.style.display = "block";
      body.style.transform = "translateX(0)";
    })
  }
}

add_listener(call__icons, modal__call)
add_listener(msg_icons, feedback_body)

close_icon_feedback.addEventListener ('click', function () {
  feedback_body.style.transform = "translateX(120%)";
  feedback_body.style.display = "none";
})

menu__close__phone.addEventListener ('click', function () {

  modal__call.style.transform = "translateX(120%)";
  modal__call.style.display = "none";
})















