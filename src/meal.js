function nameMenuItem(name) {
    return 'Delicious ' + name
}

function createMenuItem(name, price, type) {
    var menuItem = {
      name: name,
      price: price,
      type: type,
    }
    return menuItem
}

function addIngredients(ingredient, ingredients) {
    var arrayTest = ingredients.includes(ingredient)
    if (arrayTest === false) {
      ingredients.push(ingredient)
    }
}

function formatPrice(initialPrice) {
  return '$' + initialPrice
}

function decreasePrice(price) {
  return price * .90
}

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }

  // var recipe = {
  //   title: title,
  //   ingredients: ingredients,
  //   type: menuItemType,
  // }
  // return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
