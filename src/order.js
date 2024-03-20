function takeOrder(order, deliveryOrders){
  if(deliveryOrders.length >= 3){
    return deliveryOrders;
    console.log("MY:", meal)
  } 
  deliveryOrders.push(order)
  return deliveryOrders
}

function refundOrder(orderNum, orders){
  console.log("My orderNum:", orderNum)
  console.log("My Orders:", orders)
  for(var i = 0; i < orders.length; i++){
    if(orders[i].orderNumber === orderNum){
      orders.splice(i, 1)
    }
  }
  return orders
}

function listItems(deliveryOrders){
  console.log("YO:", deliveryOrders)
  var items = [];
  for(var i = 0; i < deliveryOrders.length; i++){
    items.push(deliveryOrders[i].item)
  }
  // items.toString()
return items.join(", ")
}

function searchOrder(orders, item){
  console.log("1:", orders)
  console.log("2:", item)
  for(var i = 0; i < orders.length; i++){
    if(orders[i].item === item){
      console.log("<<>>>>:", orders[i].item)
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