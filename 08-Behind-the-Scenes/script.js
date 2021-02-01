'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating New variable with same name as outer scope's variable
      const firstName = 'Steven';

      //Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(millenial);
    //console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age);
//printAge();
*/

//95. Hoisting and TDZ pratice

//Hoisting with variables
/*
console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;
*/

//Hoisting with functions
/*
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
console.log(addArrow);
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example
console.log(numProducts); //numProducts is undefined because it is a var and of hoisting
if (!numProducts) deleteShoppingChart();

var numProducts = 10;

function deleteShoppingChart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
*/

//96. & 97. this keyword pratice
// console.log(this); //points to global window object
/*
const calcAge = function (birthYear) {
  // console.log(2037 - birthYear);
  // console.log(this); //undefined
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  // console.log(2037 - birthYear);
  // console.log(this); //does not get this keyword function -  this points to the global window object
};
calcAgeArrow(1991);

//creating an object with a this keyword
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();
//
const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; //method borrowing - this added the calcAge function from jonas to matilda object
matilda.calcAge(); //this keyword allways points to the method calling it

// const f = jonas.calcAge;
// f(1991);
*/

//98. lecture regular functions vs arrow functions
// var firstName = 'Matilda';
/*
const jonas = {
  year: 1991,
  firstName: 'Jonas',
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //solution 1
    // const self = this; //self or that - this method was used in ES5 and ealier
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial();

    //solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  }, //arrow functions do not get the 'this' keyword function
};
jonas.greet();
jonas.calcAge();

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

//99. Primitives vs. Objects (Primitive vs. Reference Types)
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me: ', me);
*/

//100. Primitives vs. Objects in Practice
//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

//marriedJessica = {};

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
