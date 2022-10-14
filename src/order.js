function takeOrder(deliveryOrders, orders) {
  if (orders.length <= 2) {
  orders.push(deliveryOrders)
  }
};

function refundOrder(orders, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orders) {
       deliveryOrders.splice(i, 1)
    }
  }
};

function listItems(deliveryOrders) {
  var food = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    food.push(deliveryOrders[i].item)
           }
    return food.join(', ')
};
  
function searchOrder(deliveryOrders, orders) {
  var isInOrder = false
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === orders) {
      isInOrder = true
  }
}  
  return isInOrder
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder,
}