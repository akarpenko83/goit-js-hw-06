const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientArr = "";

// ingredients.forEach(function (ingredient) { 
//   ingredient = document.createElement("li");
//   return ingredientArr += ingredient;
  

//  });

for (let i = 0; i < ingredients.length; i++) {
  let ingredient = document.createElement("li");
  ingredient.textContent = ingredients[i];
  
}

// console.log("🚀 ~ ingredientArr:", ingredientArr)



// ingredients.forEach(function (ingredient) {
  // ingredient = document.createElement("li");
  // ingredient.textContent = Object.values(ingredients);

  // console.log("🚀 ~ ingredient:", ingredient)

  
// });


const ingredientsRef = document.querySelector("#ingredients");
console.log("🚀 ~ ingredientsRef:", ingredientsRef)

ingredientsRef.append(ingredientArr);


