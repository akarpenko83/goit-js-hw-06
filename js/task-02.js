const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");

let ingredientArr = [];

ingredients.forEach(function(ingredient) {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList = "item";
  return ingredientArr.push(listItem);
});

ingredientsRef.append(...ingredientArr);




