'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const createingredientItem = (item) => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = item;
  return ingredientItem;
};

const ingredientsRef = ingredients.map((ingredient) =>
  createingredientItem(ingredient)
);
ingredientsList.append(...ingredientsRef);
