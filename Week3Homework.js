const pizzaToppings = ["Pepperoni", "Sausage", "Chicken", "Pineapple"];

//Greet Customer
console.log("Welcome your Pizza toppings choices are:");
for (let toppingsList of pizzaToppings) {
  console.log(toppingsList);
}
//Get Pizza Order
const getPizzaOrder = {
  size: ["Small", "Medium", "Large"],
  crust: ["Thin", "Normal", "Pan"],
  toppings: []
};

console.log(
  "Your",
  getPizzaOrder.size[1],
  getPizzaOrder.crust[0],
  "crust pizza with",
  pizzaToppings[1],
  pizzaToppings[3],
  "is cooking!"
);

console.log(getPizzaOrder);

//Prepare Pizza
const preparePizza = {
  size: "Medium",
  crust: "Thin Crust",
  toppings: "Sausage & Pineapple"
};

console.log("...Coming up...");

console.log(preparePizza);

//Serve Pizza
const pizza = [preparePizza.size, preparePizza.crust, preparePizza.toppings];

console.log("Ding it's ready!");

console.log("Your", pizza, "Pizza is ready. Enjoy!");
