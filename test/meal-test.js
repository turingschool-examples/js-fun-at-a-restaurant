const chai = require("chai");
const assert = chai.assert;

const {
  nameMenuItem,
  createMenuItem,
  addIngredients
} = require("../src/meal");

describe("meal.js", function() {
  describe("createTitle", function() {
    it("should be a function", function() {
     assert.isFunction(nameMenuItem)
    })

    it.skip("should take in a name and make a delicious name", function () {
      var menuItemName = nameMenuItem("Pizza")
      assert.equal(menuItemName, "Delicious Pizza");
    });

    it.skip("should be able to create many delicious titles", function () {
      var burritoItem = nameMenuItem("Burrito")
      var sushiItem = nameMenuItem("Pizza")
      var tacoItem = nameMenuItem("Taco")

      assert.equal(burritoItem, "Delicious Burrito");
      assert.equal(sushiItem, "Delicious Pizza");
      assert.equal(tacoItem, "Delicious Taco");
    });
  });

  describe("createMenuItem", function() {
    it.skip("should be a function", function () {
      assert.isFunction(createMenuItem)
    });

    it.skip("should create a menu item object", function() {
      var menuItemName = nameMenuItem("French Toast")
      var menuItem = createMenuItem(menuItemName, 10.99, "breakfast")

      assert.equal(menuItem.name, "Delicious French Toast");
      assert.equal(menuItem.price, 10.99)
      assert.equal(menuItem.type, "breakfast")
    });
  });

  describe("addIngredients", function() {
    it.skip("should be a function", function () {
      assert.isFunction(addIngredients)
    });

    it.skip("should be able to add ingredients to an array", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);

      assert.equal(ingredients.length, 1);
      assert.deepEqual(ingredients, ["cheese"]);
    });

    it.skip("should be able to add ingredients to an array that already contains ingredients", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);
      addIngredients("peppers", ingredients);

      assert.equal(ingredients.length, 2);
      assert.deepEqual(ingredients, ["cheese", "peppers"]);
    });

    it.skip("should only add unique ingredients", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);
      addIngredients("peppers", ingredients);
      addIngredients("peppers", ingredients);

      assert.equal(ingredients.length, 2);
      assert.deepEqual(ingredients, ["cheese", "peppers"]);
    })
  })
});