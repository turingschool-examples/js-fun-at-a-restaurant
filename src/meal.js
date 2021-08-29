function nameMenuItem(menuItemName) {
  return(`Delicious ${menuItemName}`);
}

function createMenuItem(name, price, type) {
  var createMenuItem = {
  name: name,
  price: price,
  type: type
  };
  return createMenuItem;
}

function addIngredients(foodItem, ingredients) {
  for (var i = 0; i < ingredients.length; i++) {
    if (foodItem === ingredients[i]) {
      return;
    };
  };
ingredients.push(foodItem);
}



function formatPrice(initialPrice) {
  return "$" + initialPrice;
}





function decreasePrice(initialPrice) {
  return initialPrice - (initialPrice * 0.10);
}





function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type
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
