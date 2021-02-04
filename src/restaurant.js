function createRestaurant(name) {
  // console.log(name)
  var restaurant = {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
  // console.log(restaurant.menus)
  return restaurant;
}

function addMenuItem(pizzaRestaurant, menuItem) {
  // console.log('name=', pizzaRestaurant)
  // console.log('item=', menuItem)
  // console.log('type=', menuItem.type)

  // var menuNames = [];
  // menuNames.push(menuItem);
  // console.log(menuNames)

  // if (menuNames.includes(menuItem.name)) {
  //   console.log('yes')
  // }

  // console.log('a=', pizzaRestaurant.menus[menu][0])

  var menu = menuItem.type;
  // console.log('a=', pizzaRestaurant.menus)
  if (!pizzaRestaurant.menus[menu].includes(menuItem)) {
    var newMenu =  pizzaRestaurant.menus[menu].push(menuItem);
  }
  // console.log('a=', pizzaRestaurant.menus)
  // console.log('type=', pizzaRestaurant.menus[menu])
  // console.log('name=', pizzaRestaurant)
  return newMenu;
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}