const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('change', event => {
  const value = event.currentTarget.value + 'px';
  if (event.currentTarget.value !== Number(input.value)) {
    span.style.fontSize = `${value}`;
  }
});
