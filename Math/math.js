
// Javascript Math Object :

// The syntax to call the properties and methods of Math are as follows

var pi_val = Math.PI;
var sine_val = Math.sin(30);

console.log(pi_val);
console.log(sine_val);
// JavaScript Math object provides several constants and methods to perform mathematical operation.Math object doesn't have constructor

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

Math.round(4.9);    // returns 5
Math.ceil(5.3);     // returns 5
const result=Math.round(4.2);// result 4
const result=Math.ceil(5.1);  ;// result 6
const result=Math.floor(5.1);  ;// result 5
const result=Math.floor(5.1);  ;// result 5
const result=Math.PI;  ;// result 3.141592653589793
console.log(result);
// find random value with min and max

var random= Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random);

// Comma operator
// We all actually ignore the good old comma, don't we? Well, here's a little info on this guy that you should know. It evaluates each of its operands (from left to right) and then returns the value of the last operand.
 
let x = 1;

x = (x++, x);

console.log(x); // expected output: 2

x = (2, 3);

console.log(x); // expected output: 3
