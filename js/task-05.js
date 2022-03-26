const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const name = event.currentTarget.value;
    name ? output.textContent = name : output.textContent = 'Anonymous';
};