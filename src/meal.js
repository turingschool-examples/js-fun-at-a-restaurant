function nameMenuItem(food) {
  var menuItemName = `Delicious ${food}`;
  return menuItemName;
}

function createMenuItem(item, price, type) {
  var menuItem = {
    name: item,
    price: price,
    type: type,
  }
  return menuItem;
}

function addIngredients(item, ingredients) {
  if (!ingredients.includes(item)) {
    ingredients.push(item);
    return ingredients;
  }
//
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(price) {
  return price * .9;
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
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


