/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.1415;

// self work//
let country = "United States of America";
let continent = "North America";
let population = 360;
let isIsland = false;
let language;


console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);


let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

//declare varibles with let, var, const

let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtman';
console.log(lastName);




//operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageSarah * 2, ageJonas / 10, 2 ** 3);
//2**3 means 2 to the power of 3 = 2*2*2=8

const firstName = 'Jonas';
const lastName = "Schmedtman";
console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10; //15 + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);




const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



////////////////////////////////
//coding challenge #1

// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI" + ' ' + markBMI, "John's BMI" + ' ' + johnBMI);
console.log("Is Mark's BMI higher?" + ' ' + markHigherBMI);



//basic strings
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

//Template Literals use (`) tick mark around statement and then ${} for predefined variables

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

//you can use back ticks for any string
console.log(`Just a regular string..`);

console.log('string with \n\
multiple \n\
lines');

console.log(`string
multiple
lines`)


//take decisions and else if statements
const age = 15;
//const isOldEnough = age >= 18;

if (age >= 18) {
    console.log("Sarah can start driving license  ");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
};

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
};
console.log(century);


//Coding Challenge #2

const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;

// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

//console.log("Mark's BMI" + ' ' + markBMI, "John's BMI" + ' ' + johnBMI);
//console.log("Is Mark's BMI higher?" + ' ' + markHigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's (${markBMI}) BMI is higher than
    John's (${johnBMI}) BMI!`);
} else {
    console.log(`John's (${johnBMI}) BMI is higher than
    Mark's (${markBMI}) BMI!`);
};


//Type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//Type coercion
console.log("I am " + 23 + " years old");  //this changes 23 to string behind the sences
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');
console.log('23' < '18');

let n = '1' + 1; // catanates to string '11'
n = n - 1; // - sign forces '11' to become number 11 the -1 = 10
console.log(n);


//21. Truthy and Falsy values

//five falsy values: 0, " ", undefined, null, NaN

console.log(Boolean(0)); // the number 0
console.log(Boolean(undefined)); //undefined
console.log(Boolean('Jonas')); //not a falsey because it is a defined string
console.log(Boolean({})); //empty object
console.log(Boolean('')); //empty string

const money = 100; //0 is a falsy
if (money) {
    console.log("Don't spend it all ;)");

} else {
    console.log("You should get a job!");
};

let height = 0;
if (height) {
    console.log("YAY! Height is defined!");

} else {
    console.log('Height is UNDEFINED');
};
*/

//22. Equality Operators
/*
const age = '18';
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { //'23' == 23
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
} else if (favourite === 9) {
    console.log('9 is also a cool number!');
} else {
    console.log("Number is not 23 or 7 or 9");
};

if (favourite !== 23) {
    console.log('Why not 23?');
}
*/


//23. Boolean Logic
// AND, OR & NOT video only no coding

//24. Logical operators
/*
const hasDiversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDiversLicense && hasGoodVision);
console.log(hasDiversLicense || hasGoodVision);
console.log(!hasDiversLicense);

const shouldDrive = hasDiversLicense && hasGoodVision;

// if (hasDiversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive..");
// };

const isTired = false; //C
console.log(hasDiversLicense || hasGoodVision || isTired);

if (hasDiversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive..");
};
*/

//Coding challenge #3

//(96 + 108 + 89)
// const dophinsAvgScore = (96 + 108 + 89) / 3;
// const koalasAvgScore = (88 + 91 + 110) / 3;

// console.log(dophinsAvgScore, koalasAvgScore);

// if (dophinsAvgScore > koalasAvgScore) {
//     console.log("Dophins win the competition!");
// } else if (dophinsAvgScore < koalasAvgScore) {
//     console.log("Koalas win the competition!");
// } else if (dophinsAvgScore === koalasAvgScore) {
//     console.log("The competition ends in a draw!");
// };

/*
//Bonus #1
const dophinsAvgScore = (97 + 112 + 101) / 3;
const koalasAvgScore = (109 + 95 + 106) / 3;

console.log(dophinsAvgScore, koalasAvgScore);

if (dophinsAvgScore > koalasAvgScore && dophinsAvgScore >= 100) {
    console.log("Dophins win the competition!");
} else if (dophinsAvgScore < koalasAvgScore && koalasAvgScore >= 100) {
    console.log("Koalas win the competition!");
} else if (dophinsAvgScore === koalasAvgScore && koalasAvgScore >= 100 && dophinsAvgScore >= 100) {
    console.log("The competition ends in a draw!");
} else {
    console.log("No one wins or draws, both scores under a 100 points!");
};
*/

//26. The Switch Statement

/*
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'  strict equality check
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code examples");
        break;
    case 'friday':
        console.log("Record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a day of the week!!")
        break;
};
*/

/*
if (day === 'monday') {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === 'tuesday') {
    console.log("Prepare theory videos");
} else if (day === 'wednesday' || 'thursday') {
    console.log("Write code examples");
} else if (day === 'friday') {
    console.log("Recode videos");
} else if (day === 'saturday' || 'sunday') {
    console.log("Enjoy the weekend :D");
} else {
    console.log('Not a valid day!!');
};
*/

//27. Statements and Expressions
//discussion only not coding

//28. The Conditional (Ternary) Operator
/*
const age = 15;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
};

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

//29. Coding chanllenge #4

//const bill = 275;
const bill = 40;
//const bill = 430;

const tip = (bill >= 50) && (bill <= 300) ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, 
    the total value ${bill + tip}.`);








































