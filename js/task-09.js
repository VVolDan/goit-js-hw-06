const body = document.body;
const buttonChangeColor = document.querySelector('button.change-color');
const colorValue = document.querySelector('span.color');

buttonChangeColor.addEventListener('click', onButtonChangeColor);

function onButtonChangeColor() {
  const randomColor = getRandomHexColor();

  colorValue.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;



