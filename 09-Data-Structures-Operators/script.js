'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //before ES6 this option or just have the openingHours object listed in this object
  //openingHours: openingHours,

  //after ES6 with enchanged object literals
  openingHours,

  //functions with enchanced Object literals easier syn (remove the function word and : )
  //one example below show the enchanced object literal option - less typing
  //old way

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  //new way
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}`
    );
  },
  oderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is you declicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
//113 looping Objects: Object keys, Values and Entries
//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

//[key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
/*
// 112 Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//NOW WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we are open at ${open}.`);
}

//Methods with the Optional Chaining (?.) operator
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist!');
console.log(restaurant.orderRistto?.(0, 1) ?? 'Method does not exist!');

//Arrays with the Optional Chaining (?.) operator
const user = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
];

console.log(user[0]?.name ?? 'User array empty!');
*/
// 111. Enchanced Object Literals
//create weekdays const and then used in the openingHours object [weekday[]]

/*
//110. Looping Arrays; The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }
//
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

//destructing array version
for (const [i, el] of menu.entries()) {
  //console.log(item);
  console.log(`${i + 1}: ${el}`);
}

//console.log([...menu.entries()]);
*/

/*
//The Nullish Coalescing operator '??'
//- this acts like the || but reads 0 and '' as a truthy value
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
//////////////////////////////////
//Short Circuiting (&& and ||)
console.log('---OR---');
//Use ANY data type, return ANY data type,
//short-circuiting - below returns the first truthy value
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || '' || 0 || 'Hello' || 23 || null);

restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('---AND---');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// '||' or will return the first truthy or last value if all falsey
// '&&' and will return the first falsey value or last value if truthy
*/

/*
//////////////////////////////////////
//Rest Pattern and Parameters
//1.) Destructuring
//Spread, because on RIGHT side of = (assignment operator)
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of = (assignment operator)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects with the REST operator
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2.) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'funions', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');
*/
/*
/////////////////////////////
//The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy an array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2+ arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets. NOT Objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
//below operation does not work
//console.log(`${...str} Schmedtmann`);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

//old way
restaurant.oderPasta(ingredients[0], ingredients[1], ingredients[2]);
//new way with spread operator
restaurant.oderPasta(...ingredients);

//Objects with spread operator
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
console.log(restaurantCopy);
*/
//////////////
//Destructuring Objects
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values follows the '='
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested objects to 'reach' open and close object in the fri object do fri: {contents}
const {
  //fri: { open, close},
  fri: { open: o, close: c },
} = openingHours;
// console.log(open, close);
console.log(o, c);

const {
  sat: { open: os, close: cs },
} = openingHours;
console.log(os, cs);

*/

/*
//////Destructing arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //destructing an array
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
