function createRestaurant(restaurantName){
  var restaurant = {}
  restaurant.name = restaurantName
  restaurant.menus = {
    breakfast: [],
    lunch: [],
    dinner: [],
  }
  return restaurant
}
function addMenuItem(restaurant, foodItem){
  if(!restaurant.menus.lunch.includes(foodItem) && "lunch" === foodItem.type){
    return restaurant.menus.lunch.push(foodItem)
  }else if (!restaurant.menus.breakfast.includes(foodItem) && "breakfast" === foodItem.type){
    return restaurant.menus.breakfast.push(foodItem)
  }else if (!restaurant.menus.dinner.includes(foodItem) && "dinner" === foodItem.type){
    return restaurant.menus.dinner.push(foodItem)
  }
}

function removeMenuItem(restaurant, foodItem, menuItem){
// console.log("LOOK HERE 1", restaurant.menus)
// console.log("LOOK HERE 2", foodItem)
// console.log("LOOK HERE 3", restaurant.menus.breakfast)
//this should use the for loop to look through the menu object. Same thing to add
//should be able to be used to delete
//why is the for loop breaking my if statement if I try to wrap it?
for(var i = 0; i < restaurant.menus[menuItem].length; i++)
  if(restaurant.menus[menuItem][i].name === foodItem) {
    restaurant.menus[menuItem].splice(i,1) //same [i] . splice as used in first test
    return `No one is eating our ${foodItem} - it has been removed from the ${menuItem} menu!`
  }
  return `Sorry, we don't sell ${foodItem}, try adding a new recipe!`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}