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
}
 
function removeMenuItem(restaurant, foodType, mealTime) {
  for (var i = 0; i < restaurant.type.length; i++) {
    if (restaurant.menus[])
  }
}
   
  
  

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}