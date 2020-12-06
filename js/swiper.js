

new Swiper('.brands', {

//  navigation: {
//    nextEl: '.swiper-button-next',
//    prevEl: '.swiper-button-prev'
//  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }, scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  breakpoint: {
    320: {
      slidesPerView : 1,
    }
  }

});

//if (window.matchMedia("(min-width: 550px)").matches) {
//  alert("destroy")
//  console.log("destroy")
//  Swiper.destroy(false, true)
//}







