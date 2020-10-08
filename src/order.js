function takeOrder(order, orderList) {
  if (orderList.length < 3) {
    orderList.push(order)
  }
}







module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}
