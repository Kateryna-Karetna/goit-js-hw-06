const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listOfIngredients = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = element;
  ingredientsItem.classList.add('item');

  return ingredientsItem;
});

listOfIngredients.append(...elements);
console.log(listOfIngredients);
