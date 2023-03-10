function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, meal) {
 return {
  name: name,
  price: price,
  type: meal
 }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


