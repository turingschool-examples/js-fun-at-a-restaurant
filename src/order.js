function takeOrder(orderNumber, orderArray){
orderArray.push(orderNumber);
if(orderArray.length > 3){
  orderArray.pop();
}
}

function refundOrder(number, orderArray){
  for (var i = 0; i < orderArray.length; i++) {
    if (orderArray[i].orderNumber === number) {
    orderArray.splice(i, 1);
}
  }
}
function listItems(orderArray){
  var onlyItems = [];
  for (var i = 0; i < orderArray.length; i++){
onlyItems.push(orderArray[i].item);
  }
  return onlyItems.join(', ')
}

function searchOrder(orderArray, food){
  for (var i = 0; i < orderArray.length; i++) {
    if (orderArray[i].item === food) {
      return true      
      }
    }
return false; 
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}