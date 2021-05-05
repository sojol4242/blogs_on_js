// Hi Everyone, Sojol Here.
// Today we are talking about a little bit of the fundamental concepts ofJavascript programming languages.If you are new to Javascript this is for you.

// The String Types in JavaScript:
// console.log("Hello Javascript");

//Javascript String discussion:
//If we want to store and manipulate  text type data on javascript then we need string type.It is a primitive data type in Javascript;
//Javascript string is an object that represents a sequence of character.
//Example :
//var myName="Pitar";
//Here the variable myName have a value of Pitar;
//Pitar is  blocked by the double quote this is one way to declare and store text data on Javascript String;
//Here another two way to declare and store text data in javascript;
//Example:
//var myName ='Pitar' //we can also use the single quote for store text data on Javascript String
//var myName =`Pirat`//we can also use the Backticks for store text data on Javascript String
//Now we can run above string code on console to see the result;

// To use a multiline string, you can either use the + operator or the \ operator or we use the ES6's template literal or Backticks. For example

// // using the + operator
// const message1 = 'This is a long message ' +
//     'that spans across multiple lines' +
//     'in the code.'

// // // using the \ operator
// const message2 = 'This is a long message \
// that spans across multiple lines \
// in the code.'
// //ES6's template literal or Backticks.
// const message2 = `This is a long message
// that spans across multiple lines
// in the code.`
// console.log(message2);

//Some of Javascript String Method:
// const text1 = 'hello';
// const text2 = 'world';
// const text3 = '     JavaScript    ';

// // concatenating two strings
// const result1 = text1.concat(' ', text2);
// console.log(result1); // "hello world"

// // converting the text to uppercase
// const result2 = text1.toUpperCase();
// console.log(result2); // HELLO
// // removing whitespace from the string
// const result3 = text3.trim();
// console.log(result3); // JavaScript

// // converting the string to an array
// const result4 = text1.split();
// console.log(result4); // ["hello"]

// // slicing the string
// const result5= text1.slice(1, 3);
// console.log(result5); // "el"
// In this section, you will learn about JavaScript Number with the help of examples.
//JavaScript is a primitive data type
// const a = 3;
// const b = 3.13;
// var c=654;
// var d=23.7863
// let e =542;

//  Unlike in some other programming languages, you don't have to specifically declare for integer or floating values using int, float, etc.

// In JavaScript, NaN(Not a Number) is a keyword that indicates that the value is not a number.
// Performing arithmetic operations (except + ) to numeric value with string results in NaN. For example,
//The built-in function isNaN() can be used to find if a value is a number. For example,

// const a = 4 - 'hello';
// console.log(a); // NaN

//  JavaScript Number Methods

// check if a is integer
// const a = 12;
// console.log(Number.isInteger(a)); // true

// // check if b is NaN
// const b = NaN;
// console.log(Number.isNaN(b)); // true

// // display upto two decimal point
// const d = 5.1234;
// console.log(d.toFixed(2)); // 5.12

// // Mathematical operation with javascript number :
// const x=2;
// const y=7;
// const result =x+y;// result = 9
// const result =x-y;// result = -5
// const result =x+y;// result = 14
// const result =y/x;// result = 3.5
// console.log(result);

//Javascript Math Object :

// The syntax to call the properties and methods of Math are as follows

// var pi_val = Math.PI;
// var sine_val = Math.sin(30);
//JavaScript Math object provides several constants and methods to perform mathematical operation.Math object doesn't have constructor

// abs()	It returns the absolute value of the given number.
// acos()	It returns the arccosine of the given number in radians.
// asin()	It returns the arcsine of the given number in radians.
// atan()	It returns the arc-tangent of the given number in radians.
// cbrt()	It returns the cube root of the given number.
// ceil()	It returns a smallest integer value, greater than or equal to the given number.
// cos()	It returns the cosine of the given number.
// cosh()	It returns the hyperbolic cosine of the given number.
// exp()	It returns the exponential form of the given number.
// floor()	It returns largest integer value, lower than or equal to the given number.
// hypot()	It returns square root of sum of the squares of given numbers.
// log()	It returns natural logarithm of a number.
// max()	It returns maximum value of the given numbers.
// min()	It returns minimum value of the given numbers.
// pow()	It returns value of base to the power of exponent.
// random()	It returns random number between 0 (inclusive) and 1 (exclusive).
// round()	It returns closest integer value of the given number.
// sign()	It returns the sign of the given number
// sin()	It returns the sine of the given number.
// sinh()	It returns the hyperbolic sine of the given number.
// sqrt()	It returns the square root of the given number
// tan()	It returns the tangent of the given number.
// tanh()	It returns the hyperbolic tangent of the given number.
// trunc()	It returns an integer part of the given number.

// Math.PI       // returns PI
// Math.E        // returns Euler's number
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10

// Math.round(4.9);    // returns 5
// Math.ceil(5.3);     // returns 5
// const result=Math.round(4.2);// result 4
// const result=Math.ceil(5.1);  ;// result 6
// const result=Math.floor(5.1);  ;// result 5
// const result=Math.floor(5.1);  ;// result 5
// const result=Math.PI;  ;// result 3.141592653589793
// console.log(result);
// var array = [32, 4, "pitar"];
// for (var i = 0; i <= array.length; i++) {
//   console.log(array[i]);
// }

 
// slice()	selects the part of an array and returns the new array
// splice()	removes or replaces existing elements and/or adds new elements
// / concat()	joins two or more arrays and returns a result
// indexOf()	searches an element of an array and returns its position
// find()	returns the first value of an array element that passes a test
// findIndex()	returns the first index of an array element that passes a test
// forEach()	calls a function for each element
// includes()	checks if an array contains a specified element

let dailyActivities = ['java', 'c', 'javascript']
let newRoutine = ['python'];

//finding the index position of string
const position = dailyActivities.indexOf('c');
console.log(position); // 1

// slicing the array elements
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); //[ 'c', 'javascript' ]

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); // [ 'java', 'c', 'javascript', 'python' ]
