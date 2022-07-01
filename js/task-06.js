const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
  if (event.currentTarget.value.length !== Number(input.getAttribute('data-length'))) {
    return input.classList.add('invalid');
  }
  return input.classList.replace('invalid', 'valid');
});
