const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBorderChange)

function onInputBorderChange(event) {
    if (event.currentTarget.value.length >= input.dataset.length) {
        input.classList.add('valid');
    } else if (event.currentTarget.value.length) {
        input.classList.add('invalid');
    }
}