function createRestaurant(name) {
  return {
      name: name,
      menus: {
        breakfast: [],
        lunch: [],
        dinner: [],
      }
    };
}

function addMenuItem(restObj, item) {
  var mealType = item.type;
  var menusArray = restObj.menus[mealType];
    if (menusArray.includes(item)) {
      return restObj.menus
    } else {
    menusArray.push(item);
    }
}

function removeMenuItem(restObj, itemName, menuType) {
  if (menuType === undefined) {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
  }
  for (var i = 0; i <= restObj.menus[menuType].length; i++) {
    if (restObj.menus[menuType][i].name === itemName) {
        restObj.menus[menuType].splice(i,1)
    } else {
  }

      return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
