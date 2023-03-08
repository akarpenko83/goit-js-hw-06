const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('#name-output');

const onInputTextChanged = (event) => {
    outputRef.textContent = event.currentTarget.value;
};

inputRef.addEventListener('input', onInputTextChanged);

