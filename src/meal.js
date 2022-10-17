function nameMenuItem(name){
  return `Delicious ${name}`
}
function createMenuItem(name, price, type){
  return {
    name: name,
    price: price,
    type: type,
  }
}
function addIngredients(food, ingredients) {
  if(!ingredients.includes(food))
  ingredients.push(food)
}
function formatPrice(initialPrice) {
  return `$${initialPrice}`
}
function decreasePrice(reducedPrice) {
  return reducedPrice - (reducedPrice * .1)
}
function createRecipe(title, ingredients, menuType){
  return {
    title: title,
    ingredients: ingredients,
    type: menuType,
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


