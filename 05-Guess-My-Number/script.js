'use strict';

//71. DOM and DOM Manipulation
//DOM = Document Object Model
//API = Application Programming Interface

//72. practice with DOM

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
