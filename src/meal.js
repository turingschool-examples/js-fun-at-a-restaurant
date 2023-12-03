function nameMenuItem(food) {
return `Delicious ${food}`;
}
// Any food item you put in the argument, will return as
// 'Delicious food'. This allows the code to be dynamic. 
// Test requires nameMenItem to be a function. 

function createMenuItem(itemName, itemPrice, itemType){
  var menuItem = { 
    name: itemName, 
    price: itemPrice, 
    type: itemType
  }
  return menuItem;
}
// Test requires createMenuItem to be a function. 
// Based on test, createMenuItem should hold 3 parameters, which 
// includes the name of the item, the price of the item, and 
// The assertions clue me in that you will be able to return 
// the name, price, and item by doing dot notation. It also clues me
// in that the function createMenuItem will include an object. 

function addIngredients(singleIngredient, ingredientArray){
if (!ingredientArray.includes(singleIngredient)) {
ingredientArray.push(singleIngredient);
 }
}
// This one we reviewed in class, which helped significantly. I had 
// some trouble reading the test side and was not able to 
// independently come up with that 2 parameters are needed in the 
// function. This is where the question came up of matching the number
// of parameters to the number of arguments, which turns out makes one
// of the paramters 'undefined' if you put in 2 parameters, but just 
//  1 argument. I learned about the bang operator (!), which 
// inverses the boolean. The bang is saying that if you put in a
// unique ingredient, and it does NOT already include it, then 
// it will be pushed into the array. This allows unique and many 
// ingredients to be added to the array. The push method adds 
// to the end of the array. So it reads, that it will add the 
// singleIngredient to the end of the ingredientArray. 

function formatPrice(initialPrice){
return `$${initialPrice}`;

}
// This one states that any price you put in the argument, 
// will then return that number with a dollar sign added
// to the beginning of it. 

function decreasePrice(price){
var newPrice = price * 0.9; 
return newPrice; 
 }
// 10% off a price is multiplying the initial price by 
// .9, which then equals the new price. 

function createRecipe(title, ingredients, type){
var recipe = {
  title: title,
  ingredients: ingredients, 
  type: type,
}
return recipe; 
}

// Test is stating to declare a function and name it createRecipe. 
// Test is stating that a recipe object should be returned. The 
// variable recipe is an object, with key-value pair of title-title, 
// ingredients-ingredients, and type-type. Based on the assertions, we
// know that you can return the title, ingredients, and type by 
// dot notation. 

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


