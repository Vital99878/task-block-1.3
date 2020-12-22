//let more_btn__brands = document.querySelector('.more--brands');
//let more_btn__technics = document.querySelector('.more--technics');
//let list_brands = document.querySelector('.service__list--brands');
//let list_technics = document.querySelector('.service__list--technics');
//
//
//more_btn__brands.addEventListener('click', function ( ) {
//  let text = more_btn__brands.textContent;
//
//  if (text === "Показать все") {
//    more_btn__brands.textContent = "Скрыть";
//    more_btn__brands.classList.add("rotate");
//    list_brands.style.maxHeight = "1000px";
//
//  }else {
//    more_btn__brands.textContent = "Показать все";
//    more_btn__brands.classList.remove("rotate");
//    list_brands.style.maxHeight = "150px";
//  }
//
//})
//
//more_btn__technics.addEventListener('click', function ( ) {
//
//  let text = more_btn__technics.textContent;
//
//  if (text === "Показать все") {
//    more_btn__technics.textContent = "Скрыть";
//    more_btn__technics.classList.add("rotate");
//    list_technics.style.maxHeight = "1500px";
//
//  }else {
//    more_btn__technics.textContent = "Показать все";
//    more_btn__technics.classList.remove("rotate");
//    list_technics.style.maxHeight = "150px";
//  }
//
//})
//
//const swiper_container = document.querySelector('.swiper-container')
//
//let swiper;
//
//function swiper_575 () {
//  if (window.innerWidth <= "575" && swiper_container.dataset.mobile === "false" ) {
//
//    swiper = new Swiper('.swiper-container', {
//
//      pagination: {
//        el: '.swiper-pagination',
//        clickable: true,
//      },
//
//      scrollbar: {
//        el: '.swiper-scrollbar',
//      },
//      spaceBetween: 16,
//      slidesPerView: 1.3,
//
//    })
//
//    swiper_container.dataset.mobile = "true"
//
//  }
//
//  else  {
//    swiper_container.dataset.mobile = "false"
//  }
//}
//
//swiper_575()
//
//window.addEventListener ('resize', swiper_575)
//
//
//
//
//
//
