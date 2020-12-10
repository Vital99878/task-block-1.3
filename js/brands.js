let more_btn = document.querySelector('.more');
let cards = document.querySelector('.service__list');


more_btn.addEventListener('click', function ( ) {

  let text = more_btn.textContent;

  if (text === "Показать все") {
    more_btn.textContent = "Скрыть";
    more_btn.classList.add("rotate");
    cards.style.maxHeight = "1000px";

  }else {
    more_btn.textContent = "Показать все";
    more_btn.classList.remove("rotate");
    cards.style.maxHeight = "150px";
  }

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
