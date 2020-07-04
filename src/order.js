function takeOrder(orderNum, array) {
  if (array.length <= 2) {
  array.push(orderNum)
  }
}

function refundOrder(orderNumber, array) {
  array.shift(orderNumber)
}

function listItems(array) {
  var noms = [(array[0].item), (array[1].item), (array[2].item)];
  return noms.join( ", ")
}

function searchOrder(array, item) {
  for (var i = 0; i < array.length; i++) {
  return array[i].item.includes(item)
  }
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
