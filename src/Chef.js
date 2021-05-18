class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(name, morning) {
    if(morning) {
      return `Good morning, ${name}!`
    }
      return `Hello, ${name}!`
  }
  checkForFood(foodItem) {
    if(this.restaurant.menus[foodItem.type].includes(foodItem)) {
      return `Yes, we're serving ${foodItem.name} today!`
    }
      return `Sorry, we aren't serving ${foodItem.name} today.`
  }
};

module.exports = Chef;
