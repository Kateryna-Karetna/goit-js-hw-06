const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

const value = input.value + 'px';
span.style.fontSize = value;

input.addEventListener('input', event => {
  const value = event.currentTarget.value + 'px';
  span.style.fontSize = value;
});
