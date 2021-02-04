class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
    // console.log(this)
  }
  greetCustomer(customerName, dayTime) {
    if (dayTime === true) {
      return `Good morning, ${customerName}!`;
    } else {
      return `Hello, ${customerName}!`;
    }
  }

  checkForFood(foodItem) {
    // console.log(foodItem);
    if (foodItem.name === 'Quiche' || foodItem.name === 'Kouign Amann') {
      return `Sorry, we aren't serving ${foodItem.name} today.`;
    } else {
      return `Yes, we're serving ${foodItem.name} today!`;
    }
  }

}

module.exports = Chef;