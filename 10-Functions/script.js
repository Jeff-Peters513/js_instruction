'use strict';

/*
//127 Default parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //
  // ES5 way is below
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 1000); // can not skip arguments use undefined
createBooking('LH123', 2);
createBooking('LH123', 5);
*/
/*
/////////////
//128 How passsing Arguments Works: Values vs Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2345678998,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2345678998) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
//JavaScript only passes values not by reference
*/
/*
/////////
//130 Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transfromed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*
///////
// 131 Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

//Arrow function with two functions same as fully written function greet above
const greet2 = greeting => name => {
  console.log(`${greeting} ${name}`);
};
greet2('Goodmorning')('Master Jeff');

//Arrow function with two parameters
const greet3 = (greeting, name) => {
  console.log(`${greeting} ${name}`);
};
greet3('Hello', 'Fun Arrow function');

*/
/*
////////////////
//132 The Call and Apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function() {}; full old function method
  //enhanced object literal shown below
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} 
    flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//book(23, 'Sarah Williams'); // does not work

//call method - sets the "this" keyword to the proper object
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//Jonas prefers the call method
book.call(swiss, ...flightData);

////////////////////
//133 The bind method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW('23', 'Steven Williams');

//the bind can preload more than just the "this" keyword
//the in example below we apply a partial "string" so less info can be type later
//called "partial application"
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//With Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial Application

const addTax = (rate, value) => value + value * (rate / 100);
console.log(addTax(10, 200));

//the first null is the "this" keyword that is not used
const addVAT = addTax.bind(null, 23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

//coding chanllenge to rewrite the tax function with a function that returns a function
//like the greet example we did earlier

const euroVAT = function (vRATE) {
  return function (amount) {
    const totalAmount = amount + amount * (vRATE / 100);
    console.log(`The total amount with VAT is ${totalAmount}`);
  };
};

const totalVAT = euroVAT(23);
totalVAT(100);
totalVAT(1000);
totalVAT(1.0);
console.log(' ');
euroVAT(23)(100);
*/
/*
////////////
//135 Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again!');
};
runOnce();

//Example of a IIFE
(function () {
  console.log('This will never run again!!');
})();

//Example of a IIFE using an arrow function
(() => console.log('This arrow function will never run again!!!'))();
*/

/*
/////////
//136 Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/
/*
//////
//137 More closure examples

//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
//console.dir(f);

//Re-assigning f function by h function
h();
f();
//console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000); //1000 milliseconds or 1 second

  console.log(`Will start boarding in ${wait} seconds.`);
};

const perGroup = 1000;

boardPassengers(180, 3);
*/

////////////////
//138 Coding chanllenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener 
that changes the color of the selected h1 element ('header') to blue, each time 
the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! T
ake all the time you need. Think about WHEN exactly the callback function is executed, 
and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

*/
