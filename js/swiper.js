

let swiper = new Swiper('.brands', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }, scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  }
});

const mediaQuery = window.matchMedia('(min-width: 575px)');

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {

    console.log('Media Query Matched!')
//    swiper.destroy(true, true)
  }
}
mediaQuery.addEventListener("change", handleTabletChange)


handleTabletChange(mediaQuery)






