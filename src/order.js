function takeOrder(orderNumber, orderType){
orderType.push(orderNumber);
if(orderType.length > 3){
  orderType.pop();
}
}

//Declare a function and name it takeOrder. 
//The test clues me into the fact that the function takes in two 
// arguments, both the delivery order and the order number. I
// then will put in two parameters for the function, an orderNumber
// and an orderType. The push method will add an orderNumber to the 
// orderType, basically adding an order to the list. The orderNumber
// is what you're pushing into the orderType. You cannot have more than 
// 3 orders, so if the length of the order is greater than 3, the pop
// method will remove that order from the list. 

function refundOrder(number, orderType){
  for (var i = 0; i < orderType.length; i++) {
    if (orderType[i].orderNumber === number) {
    orderType.splice(i,1);
}
  }
}
// Really struggled on this, used cohort and internet for help. 
// Declare a function called refundOrder. It will contain 2 parameters, 
// the order number and the orderType. The test wants us to remove an
// order by order number. So, when a number is entered, remove that 
// specific order that contains that order number. If you do a for
// loop, it will search through all the orders. We want a specific 
// action to happen when it finds the number that is identical 
// to the number that was entered. The for loop is going through all 
// the orders, and when it finds the orderNumber (dot notation), that
// is strictly equal to the number that was entered, it will splice that
// order. Splice(i, 1)--> i indicates the start or from where the 
// array is changed. 1 indicates the delete count, or what to remove or
// splice from the array. 
// Wanted to figure out the difference between pop and splice methods.
// Pop is used for removing 
// the last element of an array, while splice is a more versatile 
// method for adding or removing elements from any position in an
//  array. 

function listItems(orderType){
  var onlyItems = [];
  for (var i = 0; i < orderType.length; i++){
onlyItems.push(orderType[i].item);
  }
  return onlyItems.join(', ')
}

// Also really struggled on this, used examples from cohort and the 
// internet. Started with declaring a variable as an empty array. Goal
// is to then put items into this array to list them off. But, just want
// to list the specific items in the objects, not all the properties. 
// Use dot notation to achieve this. You will be "pushing" the item
// names from the orders into the empty array to list them off. I was 
// not familiar with the join method. Without join, only the first
// item is listed and then it stops. join method is used to concatenate
// the array elements into a string with a comma and a space as the 
// separator. 

function searchOrder(orderType, food){
  for (var i = 0; i < orderType.length; i++) {
    if (orderType[i].item === food) {
      return true      
      }
    }
return false; 
}

// Declare a function and name it searchOrder. Needing to return either
// true or false. When you enter a food item name, it needs to 
// search through all the orders, and see if that food item is 
// listed. If it is listed, it will return true. If it is not listed, 
// it will return false. To loop through all the order, you can do a 
// for loop. You do dot notation to find the specific item in the order, 
// if the item is strictly equal to any of the items in all the orders, 
// it will return as true. If not, it will return as false. I learned
// that it matters where you place the return false statement. If you
// have it one curly brace earlier, it does not run. This is because once
// it goes throught the loop and returns true, it stops there and does not
// have the option to then return false. 
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}