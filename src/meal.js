
function nameMenuItem(food) {
  return `Delicious ${food}`
};

// var menuItemName = nameMenuItem();

function createMenuItem(menuItemName, itemPrice, itemType) {
  var menuItem = {
    name: menuItemName,
    price: itemPrice,
    type: itemType,
  };
  return menuItem
};


// var menuItem = createMenuItem();

// var ingredients = [];

function addIngredients(newIngredient, ingredients) {
    if (ingredients.includes(newIngredient) == false){
      ingredients.push(newIngredient);
    }
};

// format price should be at least one function that allows for
// adding a dollar sign in front of a variety of price inputs.

function formatPrice(initialPrice){
  return '$' + initialPrice
};

// decrease price should allow you to change the price to be smaller,
// and then also by 10%

function decreasePrice(initialPrice){
  return ((initialPrice) - (initialPrice *.1))
};


// create recipe should be a function, that creates a recipe object
// this object shoudl contain have a recipe title, ingredients, and
// typed based off of a menu item.

function createRecipe(title, ingredients, menuItemType){
  var recipe = {
    title: title,
    ingredients: ingredients ,
    type:menuItemType,
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
