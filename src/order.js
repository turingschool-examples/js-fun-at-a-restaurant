function takeOrder(theOrder, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    deliveryOrders.push(theOrder)
  }
};

function refundOrder(orderNumber, deliveryOrders) {
  for(var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1)
      return deliveryOrders
    }
  }
};

function listItems(items) {
  var orderItem = [];
  for(var i = 0; i < items.length; i++) {
    orderItem.push(items[i].item)
    var entree = orderItem.join(', ')
  }
  return entree
};

function searchOrder(deliveryOrders, entree) {
  for(var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item === entree) {
      return true
    } else continue;
  }
  return false
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
