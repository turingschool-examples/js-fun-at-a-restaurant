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

// Declare a function and name it createRestaurant. Should have a name
// and different types of menus. Can do an object inside an object. 
// Can create an object to describe the name and menu and then make the
// menu key an object to describe different types of menus. 

function addMenuItem(restaurant, item){
if(!restaurant.menus[item.type].includes(item)){
restaurant.menus[item.type].push(item)};
  }
// Could not get on my own!!!
// Declare a function and name it addMenuItem. The test side showed me
// that there should be 2 arguments, thus 2 parameters (including the food
// item and the name of the restaurant). Learned about bracket notation here! 
// Can really get specific on what you want to grab using both dot and 
// bracket notation. Here, we are specifying the restaurant we want, then the menus
// of that restaurant, then the given the food item entered, what type it is (lunch)
// for example. The bang operator is stating that, if the food item that is entered 
// not included in the list, then it will be added to the menu. Specifically, that item
// will be "pushed" into the menu. 

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

  // Could not get on my own!!! Here is my thought process of trying to think through
  // it .... 
  // Declare a function and name it removeMenuItem. 
  // Based on the test, looks like we are specifically looking at the name of the 
  // restaurant, a specific food item, and the type of item (whether it's breakfast,
  // lunch, or dinner). Declaring a variable that is looking at the specific type of 
  // menu for a given restaurant. So looking at the lunch menu, for example, at 
  // pizzaRestaurant, which includes bbqPizza. Doing a for loop to go through all
  // the menus. If the item we entered is strictly equal to (or in the menu), then 
  // we will remove that specific item name 
  // or specify the specific item name. With the splice method, it's starting
  // at the first index, removing just 1 'thing', which is the first element of the
  // object, which is the name of the item, which is why the [0] is added. 
  // Then, you add the first return statement as the test requires, to say that 
  // said removedItem has been removed from the menu.  This is basically an if/else
  // statement, so if the item is entered, it's on the menu, then it will be removed. 
  // If an item is entered, and it's NOT on the menu, then we will get the return 
  // statement that the restaurant does not sell that specific item. 

  function checkForFood(restaurant, foodItem){
    var menu = restaurant.menus[foodItem.type];
    for (var i = 0; i < menu.length; i++) {
      if (menu[i].name === foodItem.name) {
    return `Yes, we're serving ${foodItem.name} today!`}
      }
      return `Sorry, we aren't serving ${foodItem.name} today.`;
  }
  // This made more sense after following the lead of the previous code. 

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}