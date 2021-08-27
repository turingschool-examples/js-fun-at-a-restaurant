function nameMenuItem(menuItemName) {
  return(`Delicious ${menuItemName}`);

}

function createMenuItem() {
  var createMenuItem = {
  name: 'Delicious French Toast',
  price: 10.99,
  type: 'breakfast'
};
  return createMenuItem;
}

function addIngredients(foodItem, ingredients) {
  for (var i = 0; i < ingredients.length; i++) {
    if (foodItem === ingredients[i]) {
      return;
    }
}
ingredients.push(foodItem);
}








function formatPrice(initialPrice) {
  return `$${initialPrice}`
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}
