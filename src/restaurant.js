function createRestaurant(name) {
  var restaurant = {};
  restaurant.name = name
  restaurant.menus = {breakfast: [], lunch: [], dinner: []}
  return restaurant
};

function addMenuItem(restaurant, menuItem) {
  if (!restaurant.menus[menuItem.type].includes(menuItem)) {
    restaurant.menus[menuItem.type].push(menuItem);
  }
};

function removeMenuItem(restaurant, menuItem, type) {
  if(restaurant.menus[type] !== undefined) {
    for(var i = 0; i < restaurant.menus[type].length; i++) {
      restaurant.menus[type].splice(menuItem, 1);
      return `No one is eating our ${menuItem} - it has been removed from the ${type} menu!`
    }
  }
  if(!restaurant.menus[type].includes(menuItem)) {
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
  }
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
