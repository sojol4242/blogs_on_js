// The String Types in JavaScript:
// JavaScript string is zero or more characters written inside quotes.

let text = "Github is awesome";

console.log(text);

 

// Javascript String discussion:
// If we want to store and manipulate  text type data on javascript then we need string type.It is a primitive data type in Javascript;
// //Javascript string is an object that represents a sequence of character.
// //Example :
var myName = "Pitar";

/**
 * Here the variable myName have a value of Pitar;
Pitar is  blocked by the double quote this is one way to declare and store text data on Javascript String;
Here another two way to declare and store text data in javascript;
Example:
 */

var myName = "Pitar"; //we can also use the single quote for store text data on Javascript String
var myName = `Pirat`; //we can also use the Backticks for store text data on Javascript String
// Now we can run above string code on console to see the result;
console.log(myName);
// For multiline string, you can either use the + operator or the \ operator or we use the ES6's template literal or Backticks. For example

// using the + operator
const message1 =
  "This is a long message " +
  "that spans across multiple lines" +
  "in the code.";

// using the \ operator
const message2 =
  "This is a long message \
that spans across multiple lines \
in the code.";

//ES6's template literal or Backticks.
const message3 = `This is a long message
that spans across multiple lines
in the code.`;
console.log(message3);
// Escape Character
const escape = 'We are the so-called "Vikings" from the north.';
console.log(escape); // We are the so-called "Vikings" from the north.
const escape1 = "We are the so-called 'Vikings' from the north.";
console.log(escape1); // We are the so-called 'Vikings' from the north.
let escape2 = "It's fine.";
console.log(escape2); // It's fine.
/*
Six other escape sequences are valid in JavaScript:

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
*/

// Some of String Method:
const text1 = "hello";
const text2 = "world";
const text3 = "     JavaScript    ";

// concatenating two strings
const result1 = text1.concat(" ", text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO
// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5 = text1.slice(1, 3);
console.log(result5); // "el"

// includes or not: it returns true or false value; if the word exists in the string then return true otherwise return false
const result6 = result1.includes("hello");
console.log(result6); // true
