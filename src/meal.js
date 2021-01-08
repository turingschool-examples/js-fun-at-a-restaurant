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

module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
};
