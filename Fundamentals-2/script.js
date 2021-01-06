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




