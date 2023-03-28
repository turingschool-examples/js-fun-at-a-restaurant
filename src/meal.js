function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, meal) {
  var menuItem = {
    name: name,
    price: price,
    type: meal
  }
  return menuItem
}

function addIngredients(toAdd, dataVar) {
  ingredients = dataVar

  if (!ingredients.includes(toAdd)) {
    ingredients.push(toAdd)
  }
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return (price * 90) / 100
}

function createRecipe(title, ingredients, meal) {
var recipe = {
  title: title,
  ingredients: ingredients,
  type: meal
}
return recipe
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,

  createRecipe
}


