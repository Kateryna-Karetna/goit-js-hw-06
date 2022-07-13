const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');
const input = document.querySelector('input');

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

let markupSize = 30;

function onCreateBtnClick() {
  const inputValue = Number(input.value);
  createBoxes(inputValue);
}

function createBoxes(number) {
  for (let i = 0; i < number; i += 1) {
    const color = getRandomHexColor();
    const markup = `<div style="background-color: ${color}; width: ${markupSize}px; height: ${markupSize}px;"></div>`;
    markupSize += 10;

    box.insertAdjacentHTML('beforeend', markup);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onDestroyBtnClick() {
  markupSize = 30;
  box.innerHTML = '';
}
