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
/*
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

*/

//Arrow function

/*
//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

//36. Functions calling another functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces apple and ${orangePieces} pieces of orange.`;
    return juice;
};

console.log(fruitProcessor(2, 3));
*/

//37. Reviewing functions
/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired!`);
        return -1;
        ;
    }

    //return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

/*
//38. Coding chanllenge #1 of part 2
//Dolphins and Koalas gymnastics with tougher win requirements

const calcAverage = (score1, score2, score3) =>
    (score1 + score2 + score3) / 3;


//Data set 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

//test code
console.log(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koloas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team met the requirement to win!");
    };
    return avgKoalas;
};

checkWinner(avgDolphins, avgKoalas);


//Data set 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);

*/

/*
//39. Introduction to Arrays

const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ['Micheal', 'Steve', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['bob, 'Alice']; //can not replace the entire array only portions of it

const firstName = "Jonas";
const jonas = [firstName, 'Schmedtman', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

//40. Basic Array Operations (methods)
/*
const friends = ['Micheal', 'Steve', 'Peter'];

//add elements
const newLength = friends.push('Jay'); //push is a method/function on the friends array

console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//remove elements
friends.pop(); //removes last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //remove first
console.log(friends);

console.log(friends.indexOf('Steve'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steve'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); // "includes" is a strict comparsion no type coercion
console.log(friends.includes(23));

if (friends.includes('Steve')) {
    console.log("You have a friend call Steve");
};
*/

// Coding Challenge #2 of part 2
/*
function calcTip(bill) {
    let perc;
    if (bill <= 50 || bill >= 300) {
        perc = 0.20;
    } else {
        perc = 0.15;
    }
    return perc * bill
    //return "The tip is " + (perc * bill);
};

//let tip = calctip(10);
//console.log(calctip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);
*/

//42. Introduction to objects
/*
//Array with data bewteen the []
//access position/order in the array
const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'Teacher',
    ['Micheal', 'Peter', 'Steven']
];

//Object with key value pairs between the {}
//There are multiple ways to create object
//This is created by Object literal syntec
//Access by name 'firstName'
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Micheal', 'Peter', 'Steven']
};
*/

/*
//43. Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Micheal', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName); //dot notation to retreive data from an object
console.log(jonas['lastName']); //bracket notation to retreive data from an object
// dot notation must use real property name in the object to retreive that data

//Bracket notation can build an expression (computed or assembled) they retreive that data from the object
const nameKey = "Name";
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Must be on of the following: firstName, lastName, age, job, and friends.');
};

//adding new properties to the object 'jonas'
jonas.location = 'Portugal'; //adding new property using dot notation
jonas['twitter'] = '@jonasschmedtman'; //adding new property using bracket notation
console.log(jonas);

//Chanllenge
//"Jonas has 3 friends, and his best friend is called Micheal"  //first friend is the best
//hint use muliptle dots to get number of friends

const line = `"${jonas.firstName} has ${jonas.friends.length} friends,
and his best friend is called ${jonas.friends[0]}"`;
console.log(line);
*/

/*
//44. Object Methods
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : "no"} driver's license.`
    }
};

// console.log(jonas.calcAge(1991)); //calling function in an object using dot notation
// console.log(jonas['calcAge'](1991)); //calling function in an object using bracket notation

console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

//Chanllenge
//"Jonas is a 46-year old teacher, and he has a driver's license."

// const line = `"${jonas.firstName} has ${jonas.friends.length} friends,
// and his best friend is called ${jonas.friends[0]}"`;

// opps console.log(`"${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job},
//and he has a driver's license."`);

console.log(jonas.getSummary());
*/

//45. Coding Chanllenge #3 of part 2
/*
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    },
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    },
};

// console.log(mark.fullName, john.fullName);
// console.log(`Mark's BMI ${mark.calcBMI()}`);
// console.log(`John's BMI ${john.calcBMI()}`);

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);
} else if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
};
*/

//46 Iteration: The for loop
/*
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

//for loop keeps running while the condition is TRUE.

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
};
*/

//47 Looping Arrays, Breaking and Continuing
/*
const jonas = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'Teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    //filling types array - 2 ways
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
};

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
};
console.log(ages);

// continue and break statements

//continue with iteration if statement is true - if not then goes to next i iteration of the for loop
console.log('----ONLY STRINGS-----!');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string") continue;
    console.log(jonas[i], typeof jonas[i]);
};

//break stops the for loop when condition is met & no more iterations of the loop are performed
console.log('----BREAK WITH NUMBER-----!');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] == "number") break;
    console.log(jonas[i], typeof jonas[i]);
};
*/

//48 Looping Backwards and Loops in Loops
/*
const jonas = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'Teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
};

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------Starting Exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
    };
};
*/

//49 The While loop
/*
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// };

// let rep = 1;
// while (rep <= 10) {
//     console.log(`While: Lifting weights repetition ${rep}`);
//     rep++;
// };

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end..');
};
*/

//50 Coding Challenge #4 of part 2

function calcTip(bill) {
    let perc;
    if (bill <= 50 || bill >= 300) {
        perc = 0.20;
    } else {
        perc = 0.15;
    }
    return perc * bill
    //return "The tip is " + (perc * bill);
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];





