module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
//
//createRestaurant tests
      //shoudl be a function, that creates a restaurant with a name,
      // that can be multiple things, with menus of different types

  // first I want to define createRestaurant as a function
  //then I want that function to produce an object with a restaurant name
  // and should then have an object within the object of menus, containing
  // breakfast, lunch, and dinner

function createRestaurant(restaurantName, ) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  };
  return restaurant
  };


//I need a function that I can pass in a new menu item object as an
// argument then the function should access the value of type within the menu
// item object if the type is "breakfast" the function should check if
// this is an existing object already in the breakfast menu item array,
// if it is not then it should add the item to the breakfast menu array
// repeating these steps for for "lunch" type as well
// checking if the object already exists in the array
// and then adding it

function addMenuItem(pizzaRestaurant, newMenuItem){
        if (newMenuItem.type === "breakfast") {
          if (pizzaRestaurant.menus.breakfast.includes(newMenuItem) == false){
            pizzaRestaurant.menus.breakfast.push(newMenuItem);
            return pizzaRestaurant.menus.breakfast[0];
          }
        } else if (newMenuItem.type === "lunch"){
          if (pizzaRestaurant.menus.lunch.includes(newMenuItem) == false) {
          pizzaRestaurant.menus.lunch.push(newMenuItem);
          return pizzaRestaurant.menus.lunch[0];
        }
      }
    };

// I need a function that I can pass in an arguement of an item
// have function check if that is an existing item in its respective menu type
// and if the item is present remove it from the array it was in
// then I want a message to return that is a concatonation of the name of the
// dish and the type in a sentence saying it was removed
// else if the dish isn't present in the array
// it should return a message that concatonates the name of the dish
// and saying it isn't on the menu

function removeMenuItem(pizzaRestaurant, name, type){
    if ( ) {
      pizzaRestaurant.menus.type.pop(name);
      return `No one is eating our ${name} - it has been removed from the ${type} menu!`
    } else {
      return `Sorry, we don't sell ${name}, try adding a new recipe!`
    }
}
