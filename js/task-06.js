// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector('#validation-input');

// input.addEventListener('input', event => {
//   output.textContent = event.currentTarget.value;
//   if (input === '') {
//     return 'Anonymous';
//   }
// });
input.addEventListener('blur', () => {
  if (input.data - length === data - length) {
    return (input.style.border-color = 'green');
  }
  return (input.style.borderColor = 'red');
});
