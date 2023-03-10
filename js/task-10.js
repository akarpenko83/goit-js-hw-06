function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes')

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  const divArr = [];
  
  const amount = inputRef.value;
  const sizeIncreaseStep = 10;
  let currentBoxSize = 30;
  
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div')
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = `${currentBoxSize}px`;
      div.style.height = `${currentBoxSize}px`;
      currentBoxSize += sizeIncreaseStep;
      divArr.push(div);
  }
  boxes.append(...divArr);
};

function destroyBoxes() {
  boxes.innerHTML = '';
 };

