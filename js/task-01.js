const categoriesEl = document.querySelectorAll('ul#categories .item');
console.log(`Number of categories: ${categoriesEl.length}`);

const categoryEl = document.querySelector('ul#categories .item');

categoriesEl.forEach(el => console.log(
    `Category: ${el.firstElementChild.textContent} 
    \nElements: ${el.lastElementChild.childElementCount}`
));