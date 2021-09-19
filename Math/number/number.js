
// In this section, you will learn about JavaScript Number with the help of examples.
// JavaScript number is a primitive data type
const a = 3;
const b = 3.13;
var c=654;
var d=23.7863
let e =542;

//  Unlike in some other programming languages, you don't have to specifically declare for integer or floating values using int, float, etc.

// In JavaScript, NaN(Not a Number) is a keyword that indicates that the value is not a number.
// Performing arithmetic operations (except + ) to numeric value with string results in NaN. For example,
// The built-in function isNaN() can be used to find if a value is a number. For example,

const a = 4 - 'hello';
console.log(a); // NaN

//  JavaScript Number Methods

// check if a is integer
const a = 12;
console.log(Number.isInteger(a)); // true

// check if b is NaN
const b = NaN;
console.log(Number.isNaN(b)); // true

// display upto two decimal point
const d = 5.1234;
console.log(d.toFixed(2)); // 5.12

// Mathematical operation with javascript number :
const x=2;
const y=7;
const result =x+y;// result = 9
const result =x-y;// result = -5
const result =x+y;// result = 14
const result =y/x;// result = 3.5
console.log(result);
