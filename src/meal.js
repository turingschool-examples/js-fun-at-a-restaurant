function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type){
  var obj = {
    name: name,
    price: price,
    type: type
  }

  return obj;
}


function addIngredients(ingredient, ingredients) {
  if (!ingredients.includes(ingredient)){
    ingredients.push(ingredient);
  }
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price){
  var discount = price - (price * 0.10)

  return discount;
}

function createRecipe(title, ingredients, menuItemType) {
  var obj = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }

  return obj;
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


