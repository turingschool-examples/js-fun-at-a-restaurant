function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, meal) {
 return {
  name: name,
  price: price,
  type: meal
 }
}

function addIngredients(toAdd, dataVar){
  // meal = {
  //   ingredients: dataVar
  // }
  // meal.ingredients.push(toAdd)
  // console.log(meal)

  ingredients = dataVar
  ingredients.push(toAdd)
  }


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


