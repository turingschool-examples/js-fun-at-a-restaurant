

function takeOrder(orders, deliveryOrders) {
  if (deliveryOrders.length < 3){
  return deliveryOrders.push(orders);
}
}


function refundOrder(orderNumber, deliveryOrders) {
    for(var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].orderNumber === orderNumber){
    return deliveryOrders.splice(i, 1);
  }
}
}

function listItems(deliveryOrders) {
  var itemList = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    itemList.push(deliveryOrders[i].item);
  }
  return itemList.join(", ");
}



function searchOrder(deliveryOrders, list) {
  var isListed = false;
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === list) {
    isListed = true;
  }
}
  return isListed;
}

// function searchOrder(deliveryOrders, list) {
//   var isListed = true;
//   for (var i = 0; i < deliveryOrders.length; i++) {
//     if (deliveryOrders[i].item) {
//       deliveryOrders.some()
//   }
// }
// return isListed;
// }

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}







// function listItems(deliveryOrders) {
//   var itemList = [];
//   for (var i = 0; i < deliveryOrders.length; i++) {
//     return itemList.push(deliveryOrders[i].item);
//   }
//  itemList.concat(deliveryOrders[i].item);
// }
