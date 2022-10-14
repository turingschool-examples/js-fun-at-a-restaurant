class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
    }

greetCustomer(customer, isMorning) {
  if (isMorning === true) {
    return `Good morning, ${customer}!`
   } else {
    return `Hello, ${customer}!`
   }
}
addMenuItem(name, foodItem)



}

module.exports = Chef;