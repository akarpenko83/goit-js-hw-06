let counterValue = 0;

const decreaseValue = document.querySelector('[data-action="decrement"]');
const increaseValue = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

const onDecreaseBtnClick = () => {
    counterValue -= 1;
    value.textContent = `${counterValue}`;
};
const onIncreaseBtnClick = () => {
    counterValue += 1;
    value.textContent = `${counterValue}`; 
};

decreaseValue.addEventListener('click', onDecreaseBtnClick);
increaseValue.addEventListener('click', onIncreaseBtnClick);
