function nameMenuItem(name) {
  return `Delicious ` + name
  }

 function createMenuItem(name, price, type){
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
 }

 function addIngredients(ingredient, ingredients){
  // console.log("ING:", ingredient)
  // console.log("TYPE:", type)
  if(ingredients.includes(ingredient)){
    return ingredients.length
  } else {
  ingredients.push(ingredient)
  }
 }

 function formatPrice(price){
  // console.log("PR:", price)
  return `$${price}`
 }

 function decreasePrice(price){
  // console.log('Price:', menuItem)
  price -= .60
  return price
 }

 function createRecipe(title, ingredients, type){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe
 }

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


