const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const name = event.currentTarget.value;
    if (name)
        output.textContent = name;
    else
        output.textContent = 'Anonymous';
};