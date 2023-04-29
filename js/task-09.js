function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function handleChangeBodyBgAndShowNameColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = body.style.backgroundColor;
}

const body = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const colorNameEl = document.querySelector('.color');

btnEl.addEventListener('click', handleChangeBodyBgAndShowNameColor);
