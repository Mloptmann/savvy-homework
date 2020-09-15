const pizzaToppings = [" Pepperoni", " Sausage", " Chicken", " Pineapple"];

//Greet Customer
function greetCustomer() {
  return `Hello we offer${pizzaToppings.toString()} for your topping choices.`;
}

console.log(greetCustomer());

//Get Pizza Order

function getPizzaOrder(size, crustType, pizzaToppings) {
  return `One ${size}, ${crustType} with${pizzaToppings} coming up!`;
}

console.log(getPizzaOrder("large", "Thin Crust", ...pizzaToppings));

//Prepare Pizza
function preparePizza(size, crustType, pizzaToppings) {
  return `Cooking a ${size}, ${crustType} with${pizzaToppings}.`;
}

console.log(preparePizza("large", "Thin Crust", ...pizzaToppings));

//Serve Pizza
function servePizza(size, crustType, pizzaToppings) {
  return `Here's your ${size}, ${crustType} with${pizzaToppings}. Enjoy!`;
}

console.log(servePizza("large", "Thin Crust", ...pizzaToppings));
