'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D!');

//const interface = 'Audio';
//const private = 534;  //private and interface are reserved words

*/

//Functions Lecture
/*
function logger() {
    console.log('My Name is Jeff');
};

//calling, running or invoking the function shown below
logger();
//logger();
//logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangejuice = fruitProcessor(2, 4);
console.log(appleOrangejuice);

const num = Number('25');
console.log(num);
*/

//Function Declartions vs. Expressions

//Function Declaration
function calcAge1(birthYear) {
    //const age = 2037 - birthYear;
    return 2037 - birthYear;
};

const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);





