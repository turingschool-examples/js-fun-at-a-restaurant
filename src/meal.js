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

function formatPrice(initalPrice) {
  return `$${initalPrice}`
}

function decreasePrice(initalPrice) {
  return (initalPrice * 0.9 )
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}
