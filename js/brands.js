let more_btn = document.querySelector('.more');
let hidden_card = document.querySelector('.brands__item:nth-child(8)');
let cards = document.querySelector('.brands__list');


more_btn.addEventListener('click', function ( ) {
  let text = more_btn.textContent;
  if (text === "Показать все") {
    more_btn.textContent = "Скрыть";
    more_btn.style.backgroundImage = "url('../img/hide-arrow.svg')";
    cards.style.maxHeight = "1000";
    hidden_card.classList.add('brands__card--hide')
  }else {
    more_btn.textContent = "Показать все";
    more_btn.style.backgroundImage = "url('../img/more.svg')";
    cards.style.maxHeight = "150px";
  }
})



const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
//  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

if(window.innerWidth >= 576) {
  mySwiper.destroy(false, false);
  console.log("destroy")
}
