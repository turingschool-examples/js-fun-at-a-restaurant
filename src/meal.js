function nameMenuItem(itemName) {
  return `Delicious ${itemName}`;
}

const createMenuItem = (itemName, itemPrice, itemType) => {
  let menuItem = {
    name: itemName,
    price: itemPrice,
    type: itemType,
  };

  return menuItem;
};

const addIngredients = (addedIngredient, ingredients) => {
  if (ingredients.includes(addedIngredient)) {
    return;
  }
  ingredients.push(addedIngredient);
};

const formatPrice = (price) => {
  return `$${price}`;
};

const decreasePrice = (price) => {
  return price * 0.9;
};

const createRecipe = (title, ingredients, type) => {
  return { title, ingredients, type };
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
};
