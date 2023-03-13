const inputRef = document.querySelector("input#font-size-control");
const textRef = document.querySelector("span#text");

textRef.style.fontSize = `${inputRef.valueAsNumber}px`;

function onRangeChange () {
    textRef.style.fontSize = `${inputRef.valueAsNumber}px`;
    };


inputRef.addEventListener("input", onRangeChange);


