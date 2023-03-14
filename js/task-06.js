const inputRef = document.querySelector('input#validation-input');


const onBlur = () => {
    const validLength = Number(inputRef.dataset.length);
if (inputRef.value.length !== validLength) {
    inputRef.classList.add("invalid")
} else {
    inputRef.classList.add("valid")
}
};

const onFocus = () => {
    inputRef.classList.remove("invalid", "valid")
};

inputRef.addEventListener('blur', onBlur);
inputRef.addEventListener('focus', onFocus);
