function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes')

const amount = inputRef.value;

btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

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
  boxesRef.append(...divArr);
};

function destroyBoxes() {
  boxesRef.innerHTML = '';
  inputRef.value = '';
 };

