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


module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
