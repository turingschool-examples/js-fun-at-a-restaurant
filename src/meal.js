function nameMenuItem(menuItemName) {
 return "Delicious " + menuItemName;
}

function createMenuItem(name, price, type){
var menuItemName = nameMenuItem(name);
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
}



var ingredients = [];

function addIngredients(foodItem, ingredients) {
if(ingredients.includes(foodItem)) {
  return ingredients;
} else {
  ingredients.push(foodItem);
}
return ingredients;
}


function formatPrice(price) {
  return "$" + price;
}

function decreasePrice(price){
  return price - (price * .10);
}

function createRecipe(title, ingredients, type){
var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  };
return recipe;
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
