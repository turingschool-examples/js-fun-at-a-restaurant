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


module.exports = {
  createRestaurant, 
  // addMenuItem,
  // removeMenuItem
}