const additionListenerBtn = document.querySelector('[data-action="increment"]');

const subtractionListenerBtn = document.querySelector('[data-action="decrement"]');

const valueDigit = document.querySelector('#value');

additionListenerBtn.addEventListener('click', () => onAdditionBtnClick());

const onAdditionBtnClick = () => valueDigit.textContent = +valueDigit.textContent + 1;


subtractionListenerBtn.addEventListener('click', () => onSubtractionBtnClick());

const onSubtractionBtnClick = () => valueDigit.textContent = +valueDigit.textContent - 1;