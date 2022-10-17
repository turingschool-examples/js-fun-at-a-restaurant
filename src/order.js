function takeOrder(orderNumber, deliveryOrderObj) {
  if (deliveryOrderObj.length < 3) {
    deliveryOrderObj.push(orderNumber)
  return deliveryOrderObj
  }
}
function refundOrder(orderNumber, deliveryOrderObj) {
  for(var i = 0; i < deliveryOrderObj.length; i++){
    if(orderNumber === deliveryOrderObj[i].orderNumber) {
    deliveryOrderObj.splice(i,1)
    }
  }
}
function listItems(foodObj) {
  var newArray = []
  for(var i = 0; i < foodObj.length; i++){
    newArray.push(foodObj[i].item)
  }
  return newArray.join(", ")
}
function searchOrder(deliveryOrders, foodItem) {
var find = false
for (var i = 0; i < deliveryOrders.length; i++){
  if(deliveryOrders[i].item === foodItem){
    find = true
  }
}
return find
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}