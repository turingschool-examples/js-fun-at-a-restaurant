var assert = require("chai").assert;
var Chef = require("../src/Chef");

var {
  createRestaurant,
  addMenuItem
} = require("../src/restaurant");


describe("Chef (class)", function() {
  it('should instantiate a chef object', function () {
    var hannah = new Chef("Hannah");

    assert.instanceOf(hannah, Chef);
  });

  it("should have a name", function() {
    var chef = new Chef("Hannah");

    assert.equal(chef.name, "Hannah");
  });

  it("should be able to have a different name", function () {
    var chef = new Chef("Casey");

    assert.equal(chef.name, "Casey");
  });

  it("should work at a restaurant", function() {
    var restaurant = createRestaurant("Best Bakery Ever");
    var chef = new Chef("Hannah", restaurant);

    assert.equal(chef.name, "Hannah");
    assert.deepEqual(chef.restaurant, restaurant);
  });

  it("should be able to work at a different restaurant", function () {
    var restaurant = createRestaurant("Amazing Bakery");
    var chef = new Chef("Scott", restaurant);

    assert.deepEqual(chef.restaurant, restaurant);
  });

  it("should be able to greet a customer by name", function() {
    var scott = new Chef("Scott");

    assert.equal(scott.greetCustomer("Will"), "Hello, Will!");
    assert.equal(scott.greetCustomer("Pam"), "Hello, Pam!");
  });

  it('should greet a customer differently if it is morning', function () {
    var casey = new Chef("Casey");

    assert.equal(casey.greetCustomer("Scott"), "Hello, Scott!");
    assert.equal(casey.greetCustomer("Amy", true), "Good morning, Amy!");
    assert.equal(casey.greetCustomer("Hannah", false), "Hello, Hannah!");
  });

  it("should confirm if a requested item is on the menu", function() {
    var restaurant = createRestaurant("Average Bakery");
    var chef = new Chef("Hannah", restaurant);

    var foodItem1 = { 
      name: "Cinnamon Rolls",
      price: "4.49",
      type: "breakfast" 
    };

    var foodItem2 = {
      name: "Cherry Danishes",
      price: "4.79",
      type: "breakfast"
    };

    addMenuItem(chef.restaurant, foodItem1);
    addMenuItem(chef.restaurant, foodItem2);

    var foodConfirmation1 = chef.checkForFood(foodItem1);
    var foodConfirmation2 = chef.checkForFood(foodItem2);

    assert.equal(foodConfirmation1, "Yes, we're serving Cinnamon Rolls today!");
    assert.equal(foodConfirmation2, "Yes, we're serving Cherry Danishes today!");
  });

  it("should confirm if a different requested item is on the menu", function () {
    var restaurant = createRestaurant("Five Star Bakery");
    var chef = new Chef("Kayla", restaurant);

    var foodItem = {
      name: "Tart Tatin",
      price: "6.49",
      type: "breakfast"
    };

    addMenuItem(chef.restaurant, foodItem);

    var foodConfirmation = chef.checkForFood(foodItem);

    assert.equal(foodConfirmation, "Yes, we're serving Tart Tatin today!");
  });

  it("should confirm if a requested item is not on the menu", function () {
    var restaurant = createRestaurant("Best Bakery Ever");
    var chef = new Chef("Scott", restaurant);

    var foodItem = {
      name: "Quiche",
      price: "6.49",
      type: "lunch"
    };

    var foodConfirmation = chef.checkForFood(foodItem);

    assert.equal(foodConfirmation, "Sorry, we aren't serving Quiche today.");
  });

  it("should confirm if a different requested item is not on the menu", function () {
    var restaurant = createRestaurant("Best Bakery Ever");
    var chef = new Chef("Scott", restaurant);

    var foodItem = {
      name: "Kouign Amann",
      price: "6.49",
      type: "breakfast"
    };

    var foodConfirmation = chef.checkForFood(foodItem);

    assert.equal(foodConfirmation, "Sorry, we aren't serving Kouign Amann today.");
  });
});