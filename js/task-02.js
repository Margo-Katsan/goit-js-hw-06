const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');

const makeIngredients = (options) => {
  return options.map(ingredient => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredient;
    ingredientItem.classList.add('item');

    return ingredientItem;
  })
};

const ingredientsList = makeIngredients(ingredients);
ingredientsEl.append(...ingredientsList);