export let icon_menu = document.querySelector ('.menu-icon');
export let icon__close_menu = document.querySelector ('.close-icon--menu');
export let modal__menu = document.querySelector ('.modal-menu');

export let icons__message = document.querySelectorAll ('.message-icon');
export let icon__close_feedback = document.querySelector ('.close-icon--feedback');
export let modal__feedback = document.querySelector ('.modal-feedback--message');

export let icons__call = document.querySelectorAll ('.phone-icon');
export let icon__close_phone = document.querySelector ('.close-icon--order');
export let modal__phone = document.querySelector ('.modal-feedback--call');
let body = document.querySelector ("body");

// Добавляет EventListener для открытия модальных окон (кроме меню) на все иконки с одинаковыми классами.
export function add_event_listener_on_icons ( icons, modal ) {
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener ('click', function () {
      const margin_left_body = window
          .getComputedStyle (body, null)
          .getPropertyValue ("margin-left");

      const ofsset_ml = `translateX(${ margin_left_body })`
      modal.style.visibility = "visible";
      body.classList.add ('disable-scroll');
      modal.style.transform = ofsset_ml;
    })
  }
}

// Открывает вызывает модальное окно меню.
export function open_modal__menu () {
  modal__menu.style.transform = "scale(1)";
  body.classList.add ('disable-scroll')
}

// Закрытие по клику на блюре модального окна
export function close_on_blur ( evt ) {
  let element = evt.target
  evt.preventDefault ();

  let check_class__feedback = element.classList.contains ('modal-feedback--message');
  if (check_class__feedback) {
    modal__feedback.style.transform = "translateX(120%)";
    element.style.visibility = "hidden";
    body.classList.remove ('disable-scroll')
  }

  let check_class__order = element.classList.contains ('modal-feedback--call');
  if (check_class__order) {
    modal__phone.style.transform = "translateX(120%)";
    element.style.visibility = "hidden";
    body.classList.remove ('disable-scroll')
  }

  let check_class__menu = element.classList.contains ('modal-menu');
  if (check_class__menu && innerWidth < 1440) {
    modal__menu.style.transform = "scale(0)";
    body.classList.remove ('disable-scroll')
  }
}

// Закрытие модального окна по клику на кнопку close
export const close_on_icon = function ( modal ) {
  if (modal.classList.contains ('modal-menu')) {
    modal__menu.style.transform = "scale(0)";
  }
  else {
    modal.style.transform = "translateX(120%)";
  }
  body.classList.remove ('disable-scroll')
}
