function createRestaurant(name) {
  var restaurant = {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
  return restaurant;
}

function addMenuItem(pizzaRestaurant, menuItem) {
  var menu = menuItem.type;
  if (!pizzaRestaurant.menus[menu].includes(menuItem)) {
    var newMenu =  pizzaRestaurant.menus[menu].push(menuItem);
  }
  return newMenu;
}

function removeMenuItem(pizzaRestaurant, menuItem, menu) {
  if (pizzaRestaurant.menus[menu][0] === undefined) {
    return `Sorry, we don't sell Mom's Spaghetti, try adding a new recipe!`;
  } else {
    pizzaRestaurant.menus[menu].splice(0, 1);
    return `No one is eating our ${menuItem} - it has been removed from the ${menu} menu!`;
  }

}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}