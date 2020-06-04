'use strict';

console.log('======================task-1========================');

const categories = [...document.querySelectorAll('#categories h2')];

function getQuantityOfCategories() {
  const quantityOfCategories = document.querySelectorAll('.item').length;
  console.log(`В списке ${quantityOfCategories} категории.`);
}

function getAllCategories() {
  const categoriesName = document.querySelectorAll('li.item > h2');

  for (let categoryName of categoriesName) {
    console.log(
      `Категория: ${categoryName.innerHTML} , Количество элементов: ${categoryName.nextElementSibling.children.length}`
    );
  }
}

getQuantityOfCategories();
getAllCategories();
