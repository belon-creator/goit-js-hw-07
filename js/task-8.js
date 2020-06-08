'use strict';

console.log('===============task-8=================');

const container = document.getElementById('boxes');
const createBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

const box = {
  width: 30,
  height: 30,
  randomColor() {
    const color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
  },
};

function createBoxes(amount) {
  amount = Number(
    document.querySelector('div#controls').firstElementChild.value
  );
  let { width, height, randomColor } = box;
  const elements = [];

  for (let i = 1; i <= amount; i += 1) {
    const el = `<div style = 'width : ${width}px; height : ${height}px; background-color: ${randomColor()}'></div>`;
    elements.push(el);
    width += 10;
    height += 10;
  }
  container.insertAdjacentHTML('afterbegin', elements.join(''));
  console.log(`Создано ${amount} элементов!`);
}

function destroyBoxes() {
  container.innerHTML = '';
  console.log('Поле очищено!');
}
