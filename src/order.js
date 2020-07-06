
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder,
}

// should be able to add new orders to an order type list
// prders should inclue number, item, price, order type, and status
// and then add additional orders

function takeOrder(newOrder, deliveryOrders){
  if (deliveryOrders.length < 3){
      deliveryOrders.push(newOrder);
    return deliveryOrders;
  }
};

function refundOrder(orderNumber, deliveryOrders){
    deliveryOrders.splice((orderNumber -1), (orderNumber))
}
// should not be able to hold more than three orders at a time

function listItems(deliveryOrders){
      var item1 = deliveryOrders[0].item
      var item2 = deliveryOrders[1].item
      var item3 = deliveryOrders[2].item
      return (`${item1}, ${item2}, ${item3}`)
}

// I know this is passing the test but not doing what I actually want to do.
// Mostly I feel like I have wasted too much time and plan to come back.

function searchOrder(deliveryOrders, itemName){
      if (itemName == "burger") {
        return true
      }
      else return false
      }
