const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");

const makeIngredientsList = ingredients => {
return ingredients.map(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList = "item";
  return listItem;
});
}

const ingredientsArr = makeIngredientsList(ingredients);

ingredientsRef.append(...ingredientsArr);




