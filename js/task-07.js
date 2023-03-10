const inputRef = document.querySelector("input#font-size-control");
const textRef = document.querySelector("span#text");

function onRangeChange () {
    textRef.style.fontSize = `${inputRef.valueAsNumber}px`;
    };


inputRef.addEventListener("input", onRangeChange);


