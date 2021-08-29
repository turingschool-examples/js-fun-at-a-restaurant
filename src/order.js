function takeOrder(order1, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order1)
  } else{
    return
  };
}



function refundOrder(orderNum, deliveryOrders) {
  for ( var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNum) {
      deliveryOrders.splice(i, 1);
    }
  };
}





function listItems(deliveries) {
  var foodArray = [];
  for (var i = 0; i < deliveries.length; i++) {
    foodArray.push(deliveries[i].item);
  };
  var foodJoin = foodArray.join(', ');
  return (foodJoin);
}




//Is the order in the listItems ---->Return boolean
//go through the list
//check if foodname is present
//if no, insert new foodname
//if yes, end function


// function searchOrder(deliveries, foodName) {
//   for(var i = 0; i < deliveries.length; i++) {
//     // foodName.includes(deliveries[i].item)
//   } return foodName.includes(deliveries[i]);
// }


function searchOrder(deliveries, item) {
  for(var i = 0; i < deliveries.length; i++) {
    if(item === deliveries[i].item) {
      return true
    }else continue
  }
      return false
}






module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
