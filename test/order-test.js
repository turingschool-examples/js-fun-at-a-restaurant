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

      var deliveryOrders = [order1];

      takeOrder(order2, deliveryOrders);
      takeOrder(order3, deliveryOrders);

      assert.equal(deliveryOrders[0], order1);
      assert.equal(deliveryOrders[1], order2);
      assert.equal(deliveryOrders[2], order3);
    });

    it("should not be able to hold more than 3 orders at a time", function() {
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

      var order4 = {
        orderNumber: 4,
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

      refundOrder(1, deliveryOrders);

      assert.equal(deliveryOrders.length, 2);
      assert.deepEqual(deliveryOrders, [order2, order3])
    });
  });

  describe("listOrders", function() {
    it("should be a function", function () {
      assert.isFunction(listItems);
    });

    it("should list out all of the order items", function() {
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
  });

  describe("searchOrder", function() {
    it("should be a function", function () {
      assert.isFunction(searchOrder);
    });

    it("should tell us if an order is in the list", function() {
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

      var deliveryOrders = [order1, order2];

      assert.equal(searchOrder(deliveryOrders, "burger"), true);
      assert.equal(searchOrder(deliveryOrders, "sushi"), false);
    });
  });
});
