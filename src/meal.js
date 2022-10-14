function nameMenuItem(foodItem) {
  return `Delicious ${foodItem}`
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
};

function addIngredients(toppings, ingredients) {
  if (!ingredients.includes(toppings))
  ingredients.push(toppings);
};

function formatPrice(initialPrice) {
  return `$${initialPrice}`
};

function decreasePrice(price) {
  var discountPrice = price * .10
  var finalPrice = price - discountPrice
  return finalPrice
};

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};


