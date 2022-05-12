function Hamburger(size) {
  this.burger = size;
  this.modifiers = [];

  this.getPrice = () => this.burger.price;
  
  this.getCalories = () => this.burger.calories;
  
  this.addModifier = (modifier) => {
      this.burger.price += modifier.price;
      this.burger.calories += modifier.calories;
      this.modifiers.push(modifier);
  }
}

const SIZE_SMALL = {price: 50, calories: 20};
const SIZE_MIDDLE = {price: 75, calories: 30};
const SIZE_BIG = {price: 100, calories: 400};

const TOPPING_MAYO = {name: 'Mayo', price: 20, calories: 5};
const POTATO = {name: 'Potato', price: 15, calories: 10};
const CHEESE = {name: 'Cheese', price: 10, calories: 20};
const SALAD = {name: 'Salad', price: 20, calories: 5};
const SPICES = {name: 'Spices', price: 15, calories: 0};

const hamburger = new Hamburger(SIZE_BIG);

hamburger.addModifier(TOPPING_MAYO);
hamburger.addModifier(SPICES);
hamburger.addModifier(POTATO);
hamburger.addModifier(CHEESE);
hamburger.addModifier(SALAD);

console.log(hamburger.getPrice());
console.log(hamburger.getCalories());
console.log(hamburger.modifiers);