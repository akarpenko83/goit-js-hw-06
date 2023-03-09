const inputRef = document.querySelector('input#validation-input');


const onBlur = () => {
    const validLength = Number(inputRef.dataset.length);
    inputRef.value.length === validLength
        ? inputRef.classList.add("valid")
        : inputRef.classList.add("invalid");
};

const onFocus = () => {
    inputRef.classList.remove("invalid", "valid")
};

inputRef.addEventListener('blur', onBlur);
inputRef.addEventListener('focus', onFocus);


