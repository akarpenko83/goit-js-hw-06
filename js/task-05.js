const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('#name-output');

const onInputTextChanged = (event) => {
    outputRef.textContent = event.currentTarget.value;
    if (event.currentTarget.value == "") {
       return outputRef.textContent = "Anonymous";
    }
};

inputRef.addEventListener('input', onInputTextChanged);

