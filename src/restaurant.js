function createRestaurant(name, menus) {
  var newRestaurant = {
    name: name,
    menus: {
        breakfast: [],
        lunch: [],
        dinner: [],
    }
  }
return newRestaurant;
}

function addMenuItem(newRestaurant, newMenuItem) {
  for(var i = 0; i < newRestaurant.menus[newMenuItem.type].length; i++) {
    if(newRestaurant.menus[newMenuItem.type][i].name === newMenuItem.name) {
      return;
    }
  }
  newRestaurant.menus[newMenuItem.type].push(newMenuItem);
}

function removeMenuItem(newRestaurant, itemName, menuType) {
  var index = -1;
  for(var i = 0; i < newRestaurant.menus[menuType].length; i++) {
    if(newRestaurant.menus[menuType][i].name === itemName) {
      index = i;
    }
  }if(index != -1) {
    newRestaurant.menus[menuType].splice(index, 1);
    return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`;
  } else {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  }
}
module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
