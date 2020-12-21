export let navigation__list = document.querySelector ('.navigation__list')

function rm_active_class ( arr ) {
  for (let i = 0; i < arr.length; i++) {

    if (arr[i].firstElementChild.className === 'navigation__link navigation__link--active') {

      arr[i].firstElementChild.classList.remove ('navigation__link--active')
    }
  }
}

export function do_active_class ( evt ) {
  let navigation__items = navigation__list.children
  rm_active_class (navigation__items)
  evt.target.classList.add ('navigation__link--active')
}


