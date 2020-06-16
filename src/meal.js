function nameMenuItem(title) {
  return 'Delicious ' + title
}

function createMenuItem(name, price, type) {
  return { name, price, type }
}

function addIngredients(ingredient, ingredients = []) {
  if(!ingredients.includes(ingredient)) {
    ingredients.push(ingredient)
  }
  
  return ingredients
}



function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return price - (price * .10)
}


function createRecipe(title, ingredients, type) {
  return {
    title, ingredients, type
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


