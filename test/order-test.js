var chai = require("chai");
var assert = chai.assert;

var {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
} = require("../src/order");

describe("order.js", function() {
  describe("takeOrder", function() {
    it("should be a function", function() {
      assert.isFunction(takeOrder);
    });

    it("should add new orders to an order type list", function() {
      var order1 = {
        orderNumber: 1,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 2,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var deliveryOrders = [];

      takeOrder(order1, deliveryOrders);
      takeOrder(order2, deliveryOrders);

      assert.equal(deliveryOrders[0], order1);
      assert.equal(deliveryOrders[1], order2);
    });

    it("should add another order to an order type list", function () {

      var order1 = {
        orderNumber: 1,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 2,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 3,
        item: "rueben",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var takeOutOrders = [order1];

      takeOrder(order2, takeOutOrders);
      takeOrder(order3, takeOutOrders);

      assert.equal(takeOutOrders[0], order1);
      assert.equal(takeOutOrders[1], order2);
      assert.equal(takeOutOrders[2], order3);
    });

    it("should not be able to hold more than 3 orders at a time", function() {
      var order1 = {
        orderNumber: 12342,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 12472,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 3789,
        item: "rueben",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order4 = {
        orderNumber: 864,
        item: "garden salad",
        price: "6.99",
        orderType: "delivery",
        status: "accepted"
      };

      var deliveryOrders = [order1, order2];

      takeOrder(order3, deliveryOrders);
      takeOrder(order4, deliveryOrders);

      assert.equal(deliveryOrders.length, 3);
      assert.deepEqual(deliveryOrders, [order1, order2, order3]);
    });
  }); 

  describe("refundOrder", function() {
    it("should be a function", function () {
      assert.isFunction(refundOrder);
    });

    it("should remove an order by order number", function() {
      var order1 = {
        orderNumber: 1657,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 221,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 923,
        item: "rueben",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var deliveryOrders = [order1, order2, order3];

      refundOrder(1657, deliveryOrders);

      assert.equal(deliveryOrders.length, 2);
      assert.deepEqual(deliveryOrders, [order2, order3])
    });

    it("should remove a different order by order number", function () {
      var order1 = {
        orderNumber: 1241,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 2893,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 456,
        item: "rueben",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var deliveryOrders = [order1, order2, order3];

      refundOrder(2893, deliveryOrders);

      assert.equal(deliveryOrders.length, 2);
      assert.deepEqual(deliveryOrders, [order1, order3])
    });
  });

  describe("listItems", function() {
    it("should be a function", function () {
      assert.isFunction(listItems);
    });

    it("should list out all of the order items by name", function() {
      var order1 = {
        orderNumber: 1,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 2,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 3,
        item: "rueben",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var deliveryOrders = [order1, order2, order3];
      var items = listItems(deliveryOrders);

      assert.deepEqual(items, "burger, blt sandwich, rueben");
    });

    it("should list out different order items by name", function () {
      var order1 = {
        orderNumber: 3,
        item: "grilled cheese",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 20,
        item: "turkey and swiss",
        price: "6.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 4,
        item: "veggie burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var orders1 = [order1];
      var orders2 = [order2, order3];

      var items1 = listItems(orders1);
      var items2 = listItems(orders2);

      assert.deepEqual(items1, "grilled cheese");
      assert.deepEqual(items2, "turkey and swiss, veggie burger");
    });
  });

  describe("searchOrder", function() {
    it("should be a function", function () {
      assert.isFunction(searchOrder);
    });

    it("should tell us if an order is in the list", function() {
      var order1 = {
        orderNumber: 1234,
        item: "burger",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 2342,
        item: "blt sandwich",
        price: "5.99",
        orderType: "delivery",
        status: "accepted"
      };

      var deliveryOrders = [order1, order2];

      assert.equal(searchOrder(deliveryOrders, "burger"), true);
      assert.equal(searchOrder(deliveryOrders, "sushi"), false);
      assert.equal(searchOrder(deliveryOrders, "blt sandwich"), true);
    });

    it("should tell us if an order is in another list", function () {
      var order1 = {
        orderNumber: 6357,
        item: "mac and cheese",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order2 = {
        orderNumber: 65389,
        item: "bagel and cream cheese",
        price: "2.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order3 = {
        orderNumber: 99853,
        item: "spaghetti",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order4 = {
        orderNumber: 23522,
        item: "chicken parmesean",
        price: "8.99",
        orderType: "delivery",
        status: "accepted"
      };

      var order5 = {
        orderNumber: 86432,
        item: "french toast",
        price: "7.99",
        orderType: "delivery",
        status: "accepted"
      };

      var orders1 = [order1, order2];
      var orders2 = [order2, order3, order4];
      var orders3 = [order1, order2, order3, order4, order5]

      assert.equal(searchOrder(orders1, "mac and cheese"), true);
      assert.equal(searchOrder(orders1, "hawaiian pizza"), false);
      assert.equal(searchOrder(orders2, "bagel and cream cheese"), true);
      assert.equal(searchOrder(orders2, "cheese pizza"), false);
      assert.equal(searchOrder(orders3, "bagel and cream cheese"), true);
      assert.equal(searchOrder(orders3, "french toast"), true);
      assert.equal(searchOrder(orders3, "breakfast burrito"), false);
    });
  });
});
