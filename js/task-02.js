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

// Метод 2

// const newArray = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const element = ingredients[i];

//   const ingredientsItem = document.createElement('li');
//   ingredientsItem.textContent = element;
//   ingredientsItem.classList.add('item');
//   newArray.push(ingredientsItem);
// }

// listOfIngredients.append(...newArray);
// console.log(listOfIngredients);
