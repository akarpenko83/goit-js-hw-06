const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('#name-output');



const onInputTextChanged = (event) => {
    
    inputRef.value = inputRef.value.trimStart();

    outputRef.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        return outputRef.textContent = "Anonymous";
    }
};

inputRef.addEventListener('input', onInputTextChanged);

