function nameMenuItem(foodItem) {
  return `Delicious ${foodItem}`
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
}

function addIngredients(toppings, ingredients) {
  if (!ingredients.includes(toppings))
  ingredients.push(toppings);
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


