function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length <= 2){
    deliveryOrders.push(newOrder)
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  var newOrderNumber = orderNumber - 1
  //var newOrderNumber = deliveryOrders.indexOf(orderNumber)
  var remove = deliveryOrders.splice(newOrderNumber, 1)
  //var index = deliveryOrders.indexOf(newOrderNumber)
  //console.log(remove)
}

function listItems(deliveryOrders) {
  var itemNames = ''
  for (i = 0; i < deliveryOrders.length; i++) {
    if (i < deliveryOrders.length - 1) {
      itemNames += deliveryOrders[i].item + ', '
    } else {
      itemNames += deliveryOrders[i].item
    }
    //console.log(deliveryOrders[i].item)
  }
  return itemNames
}

// function searchOrder(deliveryOrders, name) {
//   var result = false
//   for (i = 0; i < deliveryOrders.length; i++) {
//     if (name === deliveryOrders[i].item) {
//        result = true
//     }
//  }
//  return result
// }

function searchOrder(deliveryOrders, name) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (name === deliveryOrders[i].item) {
      return true
    }
  }
  return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
