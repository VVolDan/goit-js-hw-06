const refs = {
    input: document.querySelector('#font-size-control'),
    phrase: document.querySelector('#text')
}

refs.phrase.style.fontSize = `${refs.input.value}px`; 

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.phrase.style.fontSize = `${event.currentTarget.value}px`;
}