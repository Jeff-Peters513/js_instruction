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
*/

////////////////////
//133 The bind method
