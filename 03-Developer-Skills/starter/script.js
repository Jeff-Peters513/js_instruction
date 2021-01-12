// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Lecture 55. Setting up VS Code

const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

console.log('this is awesome');
//leture 56.

const t = 45;
console.log(t);
console.log(t, t, t, t, x);
console.log('I like this so much!!');

//TODO
//FIXME
//VIDEO
//BUG

//62. Coding Challenge #1
/*
Given an array of forecasted maximum temperatures, the thermometer displays
 a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs
 a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

//console.log(`...${data1[0]}C...${data1[1]}C...${data1[2]}C...`);

const printForecast = function (arr) {
  console.log(arr);
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days...`;
  }
  console.log('...' + str);
};
printForecast(data1);
printForecast(data2);
