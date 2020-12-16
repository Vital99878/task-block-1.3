let menu__icon = document.querySelector ('.menu-icon');
let menu__close = document.querySelector ('.close-icon--menu');
let menu__modal = document.querySelector ('.modal-menu');

let msg_icons = document.querySelectorAll ('.msg-icon');
let close_icon_feedback = document.querySelector ('.close-icon--feedback');
let feedback_body = document.querySelector ('.modal-feedback--msg');

let call__icons = document.querySelectorAll ('.phone-icon');
let menu__close__phone = document.querySelector ('.close-icon--order');
let modal__call = document.querySelector ('.modal-feedback--call');
const html__body = document.querySelector ("body");

// Открыть меню
menu__icon.addEventListener ('click', function () {
  menu__modal.style.transform = "translateX(0)";
  html__body.style.overflowY = "hidden";
})

// Закрытие по иконке
menu__close.addEventListener ('click', function () {
  menu__modal.style.transform = "translateX(-100%)";
  html__body.style.overflowY = "visible";
})
menu__close__phone.addEventListener ('click', function () {
  modal__call.style.transform = "translateX(120%)";
  html__body.style.overflowY = "visible";
})
close_icon_feedback.addEventListener ('click', function () {
  feedback_body.style.transform = "translateX(120%)";
  html__body.style.overflowY = "visible";
})

// Закрытие по клику на блюре модального окна
function close_modal_blur ( evt ) {
  let element = evt.target
  evt.preventDefault ();

  let check_class__feedback = element.classList.contains ('modal-feedback--msg');
  if (check_class__feedback) {
    feedback_body.style.transform = "translateX(120%)";
    element.style.visibility = "hidden";
    html__body.style.overflowY = "visible";
  }

  let check_class__order = element.classList.contains ('modal-feedback--call');
  if (check_class__order) {
    modal__call.style.transform = "translateX(120%)";
    element.style.visibility = "hidden";
    html__body.style.overflowY = "visible";
  }

  let check_class__menu = element.classList.contains ('modal-menu');
  if (check_class__menu) {
    menu__modal.style.transform = "translateX(-100%)";
    element.style.visibility = "hidden";
    html__body.style.overflowY = "visible";
  }
}

modal__call.addEventListener ('click', close_modal_blur)
feedback_body.addEventListener ('click', close_modal_blur)
menu__modal.addEventListener ('click', close_modal_blur)

// Добавляет EventListener для открытия модальных окон (кроме меню) на все иконки с одинаковыми классами.
function add_listener__open_modal ( icons, modal ) {
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener ('click', function () {
      html__body.style.overflowY = "hidden";
      modal.style.transform = "translateX(0)";
      modal.style.visibility = "visible";

    })
  }
}

add_listener__open_modal (msg_icons, feedback_body)
add_listener__open_modal (call__icons, modal__call)










