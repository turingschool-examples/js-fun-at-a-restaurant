function nameMenuItem(foodItem) {
return `Delicious ${foodItem}`
};

function createMenuItem(name, price, type) {
  var menuItem = {name: name, price: price, type: type}
return menuItem
};

function addIngredients(food, ingredients) {
  if(!ingredients.includes(food)) {
  ingredients.push(food)
  return ingredients
  }
};

function formatPrice(initialPrice) {
  return `$${initialPrice}`
};

function decreasePrice(decreasedPrice) {
  var discountedPrice = decreasedPrice - (decreasedPrice * .1)
return discountedPrice
};

function createRecipe(name, ingredients, type) {
  var recipe = {title: name, ingredients: ingredients, type};
return recipe
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
