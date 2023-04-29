function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxes = [];
  let width;
  let height;
  const boxFirst = document.createElement('div');

  if (amount === "") {
    return;
  }
  
  boxFirst.style.width = "30px";
  width = parseInt(boxFirst.style.width);
  boxFirst.style.height = "30px";
  height = parseInt(boxFirst.style.height);
  boxFirst.style.backgroundColor = getRandomHexColor();
  boxes.push(boxFirst);

  for (let i = 1; i < parseInt(amount); i++) {
    const box = document.createElement('div');
    width += 10;
    height += 10;
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesEl.append(...boxes);

}
function destroyBoxes() {
  [...boxesEl.children].forEach(box => {
    box.remove();
  });
}

const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('button[data-create]');
const destroybtnEl = document.querySelector('button[data-destroy]');

createBtnEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});
destroybtnEl.addEventListener('click', destroyBoxes);