function createRestaurant(name){
  var describeRestaurant = {
    name: name,
    menus: { 
    breakfast: [], 
    lunch: [],
    dinner: []
    }
  }
return describeRestaurant; 
}

function addMenuItem(restaurant, item){
if(!restaurant.menus[item.type].includes(item)){
restaurant.menus[item.type].push(item)};
  }

function removeMenuItem(restaurant, item, type) {
    var menu = restaurant.menus[type];
    for (var i = 0; i < menu.length; i++) {
      if (menu[i].name === item) {
        var removedItem = menu.splice(i, 1)[0];
        return `No one is eating our ${removedItem.name} - it has been removed from the ${type} menu!`;
      }
    }
      return `Sorry, we don't sell ${item}, try adding a new recipe!`;
  }

  function checkForFood(restaurant, foodItem){
    var menu = restaurant.menus[foodItem.type];
    for (var i = 0; i < menu.length; i++) {
      if (menu[i].name === foodItem.name) {
    return `Yes, we're serving ${foodItem.name} today!`}
      }
      return `Sorry, we aren't serving ${foodItem.name} today.`;
  }
  

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}