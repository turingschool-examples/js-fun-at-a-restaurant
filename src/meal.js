function nameMenuItem(food) {
  return "Delicious " + food
}



function createMenuItem(name, price, type) {
  return {
    name,
    price,
    type
  }
}

function addIngredients(food, ingredients) {
  if (!ingredients.includes(food)) {
    return ingredients.push(food);
  } else {
    return (ingredients)
  }
}

function formatPrice(price) {
  return "$" + price
}

function decreasePrice(price) {
  var dropPrice = price / 10
  return price - dropPrice

}

function createRecipe(title, ingredients, type) {
  return {
    title,
    ingredients,
    type
  };

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
