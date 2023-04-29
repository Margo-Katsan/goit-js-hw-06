const counterValue = document.querySelector('#value');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

const doDecrement = () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
}
const doIncrement = () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
}

decrementBtnEl.addEventListener('click', doDecrement);
incrementBtnEl.addEventListener('click', doIncrement);
