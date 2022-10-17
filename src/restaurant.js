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
//if this (restaurant) "includes" this (foodItem) then put here. Organize by lunch, breakfast, dinner.

  if(!restaurant.menus.lunch.includes(foodItem) && "lunch" === foodItem.type){
    return restaurant.menus.lunch.push(foodItem)
  }else if (!restaurant.menus.breakfast.includes(foodItem) && "breakfast" === foodItem.type){
    return restaurant.menus.breakfast.push(foodItem)
  }else if (!restaurant.menus.dinner.includes(foodItem) && "dinner" === foodItem.type){
    return restaurant.menus.dinner.push(foodItem)
  }


    // return restaurant.menus.breakfast.push(foodItem)
    // return restaurant.menus.dinner.push(foodItem)

}

// function removeMenuItem(){

// }

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}