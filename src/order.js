function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
}

function refundOrder(orderNum, deliveryOrders) {
  deliveryOrders.splice(orderNum - 1, 1);
}

function listItems(deliveryOrders) {
  var items = '';
  for (var i = 0; i < deliveryOrders.length; i++) {
    items += `${deliveryOrders[i].item}, `;
  }
  var finalItems = items.slice(0, -2);
  return finalItems;
}

function searchOrder(deliveryOrders, orderItem) {
  var containsOrder = false;
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item.includes(orderItem)) {
      containsOrder = true;
    }
  }
  return containsOrder;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}