const additionListenerBtn = document.querySelector('[data-action="increment"]');

const subtractionListenerBtn = document.querySelector('[data-action="decrement"]');

const valueDigit = document.querySelector('#value');

additionListenerBtn.addEventListener('click', (event) => {
    console.log(`Add 1 to value ${valueDigit.textContent}`);
    onAdditionBtnClick(event);
});

function onAdditionBtnClick(event) {
    return valueDigit.textContent = Number(valueDigit.textContent) + 1;
};

subtractionListenerBtn.addEventListener('click', (event) => {
    console.log(`Substract 1 from value ${valueDigit.textContent}`);
    onSubtractionBtnClick();
});

function onSubtractionBtnClick(event) {
    return valueDigit.textContent = Number(valueDigit.textContent) - 1;
};