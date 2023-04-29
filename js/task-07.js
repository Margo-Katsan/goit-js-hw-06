const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const handleChangeFontSize = event => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}

rangeEl.addEventListener('input', handleChangeFontSize);