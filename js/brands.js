let more_btn = document.querySelector('.more');
let cards = document.querySelector('.brands__list');


more_btn.addEventListener('click', function ( ) {
  let text = more_btn.textContent;
  if (text === "Показать все") {
    more_btn.textContent = "Скрыть";
    more_btn.style.backgroundImage = "url('../img/hide-arrow.svg')";
    cards.style.maxHeight = "1000px";

  }else {
    more_btn.textContent = "Показать все";
    more_btn.style.backgroundImage = "url('../img/more.svg')";
    cards.style.maxHeight = "150px";
  }
//  console.log()
})

const mySwiper = new Swiper('.swiper-container', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
  spaceBetween: 16,
  slidesPerView: 1.3

//  spaceBetween: 30
})

if(window.innerWidth >= 576) {
  mySwiper.destroy(true, true);
  console.log("destroy")
}
