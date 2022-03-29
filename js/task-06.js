const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBorderChange)

function onInputBorderChange(event) {
    const text = event.currentTarget.value;
    
    input.classList.remove('invalid', 'valid');
    if (text.length === +input.dataset.length) 
        input.classList.add('valid');
    else
        input.classList.add('invalid');
};