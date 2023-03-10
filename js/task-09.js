function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnRef = document.querySelector('button.change-color');
const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('span.color');

btnRef.addEventListener('click', onBtnClick);

function onBtnClick() {
  const hexColor = getRandomHexColor()
  bodyRef.style.backgroundColor = `${hexColor}`;
  spanRef.textContent = `${hexColor}`;
 };
