class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
    this.morning = false
    }
greetCustomer(customer) {
   if (this.morning === true) {
    return `Good morning, ${customer}!`
   } else {
    return `Hello, ${customer}!`
   }
  
  
}
}

module.exports = Chef;