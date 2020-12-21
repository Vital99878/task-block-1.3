import '../sass/main.scss';
import {
  icon_menu,
  icon__close_menu,
  modal__menu,
  modal__feedback,
  modal__phone,
  icons__message,
  icon__close_feedback,
  icons__call,
  icon__close_phone,
} from './modals'
import { add_event_listener_on_icons, close_on_blur, close_on_icon, open_modal__menu } from './modals'
import { paragraph_2, content__paragraph_2, content, truncate, button__more_text, rotate_btn } from "./read__more"


content(content__paragraph_2, 81)
button__more_text.addEventListener('click', () => content(content__paragraph_2))
button__more_text.addEventListener('click', rotate_btn)


// Открыть меню
icon_menu.addEventListener ('click', open_modal__menu)

add_event_listener_on_icons (icons__message, modal__feedback)
add_event_listener_on_icons (icons__call, modal__phone)

// Закрытие по иконке
icon__close_menu.addEventListener ('click', () => close_on_icon (modal__menu))
icon__close_phone.addEventListener ('click', () => close_on_icon (modal__phone))
icon__close_feedback.addEventListener ('click', () => close_on_icon (modal__feedback))

// Закрытие по заблюренной области модального окна
modal__menu.addEventListener ('click', close_on_blur)
modal__phone.addEventListener ('click', close_on_blur)
modal__feedback.addEventListener ('click', close_on_blur)

// Brands
let more_btn__brands = document.querySelector ('.more--brands');
let more_btn__technics = document.querySelector ('.more--technics');
let list_brands = document.querySelector ('.service__list--brands');
let list_technics = document.querySelector ('.service__list--technics');

more_btn__brands.addEventListener ('click', function () {
  let text = more_btn__brands.textContent;

  if (text === "Показать все") {
    more_btn__brands.textContent = "Скрыть";
    more_btn__brands.classList.add ("rotate");
    list_brands.style.maxHeight = "1000px";

  }
  else {
    more_btn__brands.textContent = "Показать все";
    more_btn__brands.classList.remove ("rotate");
    list_brands.style.maxHeight = "150px";
  }

})
more_btn__technics.addEventListener ('click', function () {

  let text = more_btn__technics.textContent;

  if (text === "Показать все") {
    more_btn__technics.textContent = "Скрыть";
    more_btn__technics.classList.add ("rotate");
    list_technics.style.maxHeight = "1500px";

  }
  else {
    more_btn__technics.textContent = "Показать все";
    more_btn__technics.classList.remove ("rotate");
    list_technics.style.maxHeight = "150px";
  }

})

const swiper_container = document.querySelector ('.swiper-container')

let swiper;

function swiper_575 () {
  if (window.innerWidth <= "575" && swiper_container.dataset.mobile === "false") {

    swiper = new Swiper ('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      spaceBetween: 16,
      slidesPerView: 1.3,

    })

    swiper_container.dataset.mobile = "true"

  }
  else {
    swiper_container.dataset.mobile = "false"
  }
}

swiper_575 ()

window.addEventListener ('resize', swiper_575)
