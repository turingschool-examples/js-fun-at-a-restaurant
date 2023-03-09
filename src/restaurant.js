function createRestaurant(name) {
  return {
    name: name,
    menus: { 
      breakfast: [], 
      lunch: [], 
      dinner: [] 
    }
  }
}

function addMenuItem(restaurant, food) {
  if (!restaurant.menus[food.type].includes(food)) {
    restaurant.menus[food.type].push(food);
  }
}

function removeMenuItem(restaurant, name, type) {
  for (var i = 0; i < restaurant.menus[type].length; i++) {
    if (name === restaurant.menus[type][i].name) {
      restaurant.menus[type].splice(i, 1)
      return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
    }
  }
  return `Sorry, we don't sell ${name}, try adding a new recipe!`;
}

function checkForFood(restaurant, food) {
  if (restaurant.menus[food.type].includes(food)) {
    return `Yes, we're serving ${food.name} today!`;
  }
  return `Sorry, we aren't serving ${food.name} today.`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}