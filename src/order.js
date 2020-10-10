function takeOrder(order, orderArr) {
  if (orderArr.length < 3) {
    orderArr.push(order)
  } else {
    return orderArr;
  }
}

function refundOrder(order, orderList) {
  orderList.splice(order - 1, 1)
}


function listItems(deliveryOrders) {
  var arrayO = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    arrayO.push(deliveryOrders[i].item)

  }
  return arrayO.join(", ")
}


function searchOrder(deliveryOrders, name) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === name) {
      return true
    } else {
      return false
    }
  }
}




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
