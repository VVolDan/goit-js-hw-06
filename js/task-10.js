const refs = {
  amountOfBoxes: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  areaOfBoxes: document.querySelector('div#boxes'),
};


// Creation of boxes;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

let boxes = [...refs.amountOfBoxes.children];
let initialAmount = +boxes.length;
let amount;

refs.amountOfBoxes.addEventListener('input', onFormInput);

function onFormInput(event) {
  amount = event.currentTarget.value;
  return amount;
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = `<div style="background-color: ${getRandomHexColor()}; width:${(30 + 10*(i+initialAmount))}px; height:${(30 + 10*(i+initialAmount))}px"></div>`;
    boxes.push(box);
  }  
  return boxes.join('');
};

function onCreateBtn() {
  refs.areaOfBoxes.innerHTML= createBoxes(amount);
}

refs.createBtn.addEventListener('click', onCreateBtn);

// Destroing of boxes;

refs.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.areaOfBoxes.innerHTML = "";
  refs.amountOfBoxes.value = "";
  amount = 0;
  boxes = [];
}

