let pizzaPlace = "Unicorn Pizza";
let numberOfToppings = 6;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

console.log(`"Welcome to ${pizzaPlace} we have ${numberOfToppings} toppings."`);

if (numberOfToppings < 10) {
  console.log(`"Quality, not quantity."`);
} else {
  console.log(`"A whole lot of pizza."`);
}

for (let toppings = 0; toppings <= numberOfToppings; toppings += 2) {
  console.log(toppings);
}
