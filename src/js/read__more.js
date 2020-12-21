export let button__more_text = document.querySelector ('.more--text');
export let text = document.querySelectorAll ('.column-left__text');
export let content__paragraph_2 = text[1].textContent;
export let paragraph_2 = text[1];

/* 81 symbols */
export function rotate_btn () {
  let text = button__more_text.textContent;

  if (text === "Читать далее" && innerWidth < 1440) {
    button__more_text.textContent = "Свернуть";
    button__more_text.classList.add ("rotate");

  }
  else {
    button__more_text.textContent = "Читать далее";
    button__more_text.classList.remove ("rotate");
  }
}

export function truncate ( str, maxlength ) {
  return ( str.length > maxlength ) ?
    str.slice (0, maxlength - 1) + '…' : str;
}

export let content = function ( textContent, length ) {
  let truncated;
  let check = text[1].dataset.truncate;
  let p_2 = text[1];

  if (innerWidth < 1440 && innerWidth > 767 && check === 'true') {
    length = 81;
    truncated = truncate (textContent, length);

    p_2.textContent = truncated;

    p_2.dataset.truncate = 'false'
  }
  else if (innerWidth < 767 && check === 'true') {
    p_2.textContent = "";
    p_2.dataset.truncate = 'false'
  }
  else {
    length = 300;
    truncated = truncate (textContent, length);
    text[1].textContent = truncated;
    p_2.dataset.truncate = 'true'
  }

}



