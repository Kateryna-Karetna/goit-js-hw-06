// Напиши скрипт, який під час набору тексту в інпуті підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  output.textContent = event.currentTarget.value;
  if (input === '') {
    return 'Anonymous';
  }
});
