function createBurger(name, price, calories) {
  this.name = name;
  this.price = price;
  this.calories = calories;

  this.getPrice = function() {
    return this.price;
  }
  this.getCalories = function() {
    return this.calories;
  }
  this.addModifierPrice = function(modifier) {
    return this.price + modifier;
  }
  this.addModifierCalories = function(modifier) {
    return this.calories + modifier;
  }
}

const SIZE_SMALL = new createBurger('SIZE_SMALL', 50, 20);
const SIZE_MIDDLE = new createBurger('SIZE_MIDDLE', 75, 30);
const SIZE_BIG = new createBurger('SIZE_BIG', 100, 40);
const CHEESE = new createBurger('CHEESE', 10, 20);
const SALAD = new createBurger('SALAD', 20, 5);
const POTATO = new createBurger('POTATO', 15, 10);
const SPIECES = new createBurger('SPIECES', 15, 0);
const TOPPING_MAYO = new createBurger('TOPPING_MAYO', 20, 5);

console.log(`Price with POTATO: ${SIZE_BIG.addModifierPrice(POTATO.price)}`);
console.log(`Calories with TOPPING_MAYO: ${SIZE_SMALL.addModifierCalories(TOPPING_MAYO.calories)}`);


