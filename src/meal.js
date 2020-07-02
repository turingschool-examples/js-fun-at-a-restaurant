function nameMenuItem(food) {
  return(`Delicious ${food}`)
}

function createMenuItem(menuItemName, price, type) {
  menuItem = {
    name: menuItemName,
    price: price,
    type: type,
  }
  return menuItem
}

function addIngredients(food, ingredients) {
  if (ingredients.includes(food)) {
    return
  } else {
    ingredients.push(food)
  }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
