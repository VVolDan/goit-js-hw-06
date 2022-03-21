const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach(ingredient => {

  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  liElement.classList.add('item');

  const list = document.querySelector('#ingredients')
  list.append(liElement);
});



