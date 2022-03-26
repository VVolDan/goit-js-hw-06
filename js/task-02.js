const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const array = [];

ingredients.forEach(ingredient => {

  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  liElement.classList.add('item');
  array.push(liElement)
});

const list = document.querySelector('#ingredients')
list.append(...array);



