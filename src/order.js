function takeOrder(orderNum, array) {
  if (array.length <= 2) {
  array.push(orderNum)
  }
}

module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}
