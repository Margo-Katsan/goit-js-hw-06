const inputEl = document.querySelector('#validation-input');

const characterСountСheckAndChangeBorder = () => {
  if (inputEl.value.length === parseInt(inputEl.getAttribute("data-length"))) {
    if (inputEl.classList.contains('invalid')) {
      inputEl.classList.remove('invalid');
    }
    return inputEl.classList.add('valid');
  }
  inputEl.classList.add('invalid');
}

inputEl.addEventListener('blur', characterСountСheckAndChangeBorder);

