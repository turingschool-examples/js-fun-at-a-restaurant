

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}



function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };
  return restaurant;
}



function addMenuItem(restaurant, foodItem) {
// restaurant.menus.lunch.push(foodItem);
  if (foodItem.type === "breakfast" && !restaurant.menus.breakfast.includes(foodItem)) {
    restaurant.menus.breakfast.push(foodItem)
  } else if (foodItem.type === "lunch" && !restaurant.menus.lunch.includes(foodItem)) {
    restaurant.menus.lunch.push(foodItem)
  } else if (foodItem.type === "dinner" && !restaurant.menus.dinner.includes(foodItem)) {
    restaurant.menus.dinner.push(foodItem)
  };
}


function removeMenuItem(restaurant, foodItem, foodType) {
  if (restaurant.menus[foodType].length > 0) {
  restaurant.menus[foodType].pop();
   return `No one is eating our ${foodItem} - it has been removed from the ${foodType} menu!`;
 } else {
    return `Sorry, we don't sell ${foodItem}, try adding a new recipe!`
  };
}
