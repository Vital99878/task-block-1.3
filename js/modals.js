let menu__icon = document.querySelector ('.menu-icon');
let menu__close = document.querySelector ('.close-icon--menu');
let menu__modal = document.querySelector ('.modal-menu');

let msg_icons = document.querySelectorAll ('.msg-icon');
let close_icon_feedback = document.querySelector ('.close-icon--feedback');
let feedback_body = document.querySelector ('.modal-feedback--msg');

let call__icons = document.querySelectorAll ('.phone-icon');
let menu__close__phone = document.querySelector ('.close-icon--order');
let modal__call = document.querySelector ('.modal-feedback--call');
const b = document.querySelector ("body");

// Menu
menu__icon.addEventListener ('click', function () {
  console.log ("menu")
  menu__modal.style.transform = "translateX(0)";

})

menu__close.addEventListener ('click', function () {
  menu__modal.style.transform = "translateX(-100%)";
})
menu__modal.addEventListener ('click', function () {
  menu__modal.style.transform = "translateX(-100%)";

})

function add_listener ( icons, body ) {
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener ('click', function () {

      document.querySelector ("body").style.overflowY = "hidden";
      body.style.transform = "translateX(0)";
    })
  }
}

// MODAL CALL
add_listener (call__icons, modal__call)

// Закрытие по иконке
menu__close__phone.addEventListener ('click', function () {
  modal__call.style.transform = "translateX(120%)";
})
close_icon_feedback.addEventListener ('click', function () {
  feedback_body.style.transform = "translateX(120%)";
})

// Закрытие по боди
function close_modal_blur ( evt ) {
  let element = evt.target
  evt.preventDefault ();

  let check_class__feedback = element.classList.contains ('modal-feedback--msg');
  if (check_class__feedback) {
    feedback_body.style.transform = "translateX(120%)";
  }

  let check_class__order = element.classList.contains ('modal-feedback--call');
  if (check_class__order) {
    modal__call.style.transform = "translateX(120%)";
  }

}

modal__call.addEventListener ('click', close_modal_blur)
feedback_body.addEventListener ('click', close_modal_blur)

 // Добавляет новые функции
add_listener (msg_icons, feedback_body)












