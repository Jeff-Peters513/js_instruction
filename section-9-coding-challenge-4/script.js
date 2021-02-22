'use strict';

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written 
in underscore_case and convert them to camelCase.

The input will come from a textarea inserted 
into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable 
        made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. 
        Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, 
        so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
//next two lines add the two boxes to the html
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//define a btn to capture the click
const btn = document.querySelector('button');
//use addEventListener to capture the test in the box when "click"
btn.addEventListener('click', function () {
  //capture text when button is clicked
  const test = document.querySelector('textarea').value;
  const [...entry] = test.split('\n');
  console.log(entry);
  const trimCamel = [];

  //trim, remove _ and camelcase the two words
  for (const e of entry) {
    trimCamel.push(e.trim());
  }
  console.log(trimCamel);

  //console.log(entry);
});

// \n = new line or carraige return
// const test2 =
//   'underscore_case\nfirst_name\nSome_Variable\ncalculate_AGE\ndelayed_departure';

// //console.log(test2);
