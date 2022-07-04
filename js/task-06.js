const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
  if (event.currentTarget.value.length !== Number(input.getAttribute('data-length'))) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.toggle('valid');
    input.classList.remove('invalid');
  }
});
