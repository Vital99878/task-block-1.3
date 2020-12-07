let more_btn = document.querySelector('.more');
let cards = document.querySelector('.brands__list');


more_btn.addEventListener('click', function ( ) {
  let text = more_btn.textContent;
  if (text === "Показать все") {
    more_btn.textContent = "Скрыть";
    more_btn.style.backgroundImage = "url('../img/hide-arrow.svg')";
    cards.style.maxHeight = "1000";

  }else {
    more_btn.textContent = "Показать все";
    more_btn.style.backgroundImage = "url('../img/more.svg')";
    cards.style.maxHeight = "150px";
  }
})

const mySwiper = new Swiper('.swiper-container', {

  pagination: {
    el: '.swiper-pagination',
    click: true
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
//  spaceBetween: 30
})

if(window.innerWidth >= 576) {
  mySwiper.destroy(true, true);
  console.log("destroy")
}
