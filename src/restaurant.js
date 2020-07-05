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

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
