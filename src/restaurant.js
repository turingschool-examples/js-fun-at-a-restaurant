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

function addMenuItem() {

}

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}