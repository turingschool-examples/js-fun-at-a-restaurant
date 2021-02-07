class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(customerName, dayTime) {
    if (dayTime) {
      return `Good morning, ${customerName}!`;
    } else {
      return `Hello, ${customerName}!`;
    }
  }

  checkForFood(foodItem) {
    var menu = foodItem.type;
    var type = foodItem.name;

    if (this.restaurant.menus[menu][0] === undefined) {
      return `Sorry, we aren't serving ${foodItem.name} today.`;
    }

    if (foodItem.name === this.restaurant.menus[menu][0].name) {
      return `Yes, we're serving ${foodItem.name} today!`;
    }
  }

}

module.exports = Chef;