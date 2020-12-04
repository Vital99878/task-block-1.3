
let more_btn = document.querySelector('.more');
let hidden_card = document.querySelector('.brands__card:nth-child(8)');
let cards = document.querySelector('.brands__cards');


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

