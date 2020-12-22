export let navigation__list = document.querySelector ('.navigation__list')
export let tabs = document.querySelector ('.tabs')

function rm_active_class ( active_class, no_active_class ) {
  let item = document.querySelector('.'+active_class)
  item.classList.remove(active_class)
  item.classList.add( no_active_class )
}


const EventHandler = ( active_class, no_active_class ) => ( evt ) => {
  evt.preventDefault()
  let item = evt.target;

// работает с тегом a
  if (item.classList.contains(no_active_class)) {
    rm_active_class (active_class, no_active_class)
    item.classList.add (active_class)
  }
  // работает с тегом li
  else if(item.parentNode.classList.contains(no_active_class)) {
    rm_active_class (active_class, no_active_class)
    item.parentNode.classList.add (active_class)
  }

}

export let active_menu = EventHandler ('navigation__link--active', 'navigation__link')
export let active_tab = EventHandler ('tabs__tab--selected', 'tabs__tab')
