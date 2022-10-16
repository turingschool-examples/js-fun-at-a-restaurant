function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant 
};

function addMenuItem(restaurant, item) {
  var newMenu = item.type;
    if (restaurant.menus[newMenu].includes(item) === false) {
      restaurant.menus[newMenu].push(item);
  } else {
    return newMenu;
  }
};
 
function removeMenuItem(restaurant, foodName, type) {
  for (var i = 0; i < restaurant.menus[type].length; i++) {
    if (restaurant.menus[type][i].name.includes(type) === false) {
      restaurant.menus[type].splice(i);
      return `No one is eating our ${foodName} - it has been removed from the ${type} menu!`
    } 
  }
      return `Sorry, we don't sell ${foodName}, try adding a new recipe!`
};
   
module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}