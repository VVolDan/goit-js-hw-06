const body = document.body;
const buttonChangeColor = document.querySelector('button.change-color');
const colorValue = document.querySelector('span.color');

buttonChangeColor.addEventListener('click', onButtonChangeColor);

function onButtonChangeColor(event) {
  const randomColor = getRandomHexColor(event);

  colorValue.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


