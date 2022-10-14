var chai = require("chai");
var assert = chai.assert;

var {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
} = require("../src/meal");

describe("meal.js", function() {
  describe("nameMenuItem", function() {
    it("should be a function", function() {
     assert.isFunction(nameMenuItem);
    });

    it("should take in a name and make a delicious name", function () {
      var menuItemName = nameMenuItem("Pizza");
      assert.equal(menuItemName, "Delicious Pizza");
    });

    it("should be able to create many delicious titles", function () {
      var burritoItem = nameMenuItem("Burrito");
      var sushiItem = nameMenuItem("Pizza");
      var tacoItem = nameMenuItem("Taco");

      assert.equal(burritoItem, "Delicious Burrito");
      assert.equal(sushiItem, "Delicious Pizza");
      assert.equal(tacoItem, "Delicious Taco");
    });
  });

  describe("createMenuItem", function() {
    it("should be a function", function () {
      assert.isFunction(createMenuItem);
    });

    it("should create a menu item object", function() {
      var menuItemName = nameMenuItem("French Toast");
      var menuItem = createMenuItem(menuItemName, 10.99, "breakfast");

      assert.equal(menuItem.name, "Delicious French Toast");
      assert.equal(menuItem.price, 10.99);
      assert.equal(menuItem.type, "breakfast");
    });
  });

  describe("addIngredients", function() {
    it("should be a function", function () {
      assert.isFunction(addIngredients);
    });

    it("should be able to add ingredients to an array", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);

      assert.equal(ingredients.length, 1);
      assert.deepEqual(ingredients, ["cheese"]);
    });

    it("should be able to add ingredients to an array that already contains ingredients", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);
      addIngredients("peppers", ingredients);
      addIngredients("onion", ingredients);

      assert.equal(ingredients.length, 3);
      assert.deepEqual(ingredients, ["cheese", "peppers", "onion"]);
    });

    it("should only add unique ingredients", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);
      addIngredients("peppers", ingredients);
      addIngredients("peppers", ingredients);

      assert.equal(ingredients.length, 2);
      assert.deepEqual(ingredients, ["cheese", "peppers"]);
    })
  })

  describe("formatPrice", function() {
    it("should be a function", function () {
      assert.isFunction(formatPrice);
    });

    it("should add a dollar sign in front of the price", function () {
      var menuItemName = nameMenuItem("French Toast");
      var menuItem = createMenuItem(menuItemName, 10.99, "breakfast");
      var initialPrice = menuItem.price;

      var formattedPrice = formatPrice(initialPrice);
      assert.equal(formattedPrice, "$10.99")
    });

    it("should add a dollar sign in front of a different price", function () {
      var menuItemName = nameMenuItem("Carrot Cake");
      var menuItem = createMenuItem(menuItemName, 5.99, "dessert");
      var initialPrice = menuItem.price;

      var formattedPrice = formatPrice(initialPrice);
      assert.equal(formattedPrice, "$5.99")
    });
  });

  describe("decreasePrice", function() {
    it("should be a function", function () {
      assert.isFunction(decreasePrice);
    });

    it("should decrease the price by 10%", function() {
      var menuItemName = nameMenuItem("Fajitas");
      var menuItem = createMenuItem(menuItemName, 6.00, "dessert");
      var decreasedPrice = decreasePrice(menuItem.price);

      assert.equal(decreasedPrice, 5.40);
    })
  })

  describe("createRecipe", function() {
    it("should be a function", function () {
      assert.isFunction(createRecipe);
    });

    it("should return a recipe object", function() {
      var ingredients = [];
      addIngredients("eggs", ingredients);
      addIngredients("bacon", ingredients);

      var title = nameMenuItem("Eggs & Bacon");
      var price = formatPrice("10.85")
      var menuItem = createMenuItem(title, price, "breakfast");
      var menuItemType = menuItem.type;

      var recipe = createRecipe(title, ingredients, menuItemType);
      assert.equal(recipe.title, "Delicious Eggs & Bacon");
      assert.deepEqual(recipe.ingredients, ["eggs", "bacon"]);
      assert.equal(recipe.type, "breakfast");
    });


    it("should return a different recipe object", function () {
      var ingredients = [];
      addIngredients("bread", ingredients);
      addIngredients("cheese", ingredients);
      addIngredients("butter", ingredients);

      var title = nameMenuItem("Grilled Cheese");
      var price = formatPrice("4.99")
      var menuItem = createMenuItem(title, price, "lunch");
      var menuItemType = menuItem.type;

      var recipe = createRecipe(title, ingredients, menuItemType);
      assert.equal(recipe.title, "Delicious Grilled Cheese");
      assert.deepEqual(recipe.ingredients, ["bread", "cheese", "butter"]);
      assert.equal(recipe.type, "lunch");
    });
  });
});