
//  Array in JavaScript:
/*
Array: array is a types in javascript for storing all types of data

*/
var array = [32, 4, "pitar"];

for (var i = 0; i <= array.length; i++) {
  console.dir(array[i]);
}


/*
Some array methods
slice()	selects the part of an array and returns the new array
splice()	removes or replaces existing elements and/or adds new elements
concat()	joins two or more arrays and returns a result
indexOf()	searches an element of an array and returns its position
find()	returns the first value of an array element that passes a test
findIndex()	returns the first index of an array element that passes a test
forEach()	calls a function for each element
includes()	checks if an array contains a specified element

*/


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

// find unique value:
const mainArray = [1, 1, 2, 3, 5, 5, 1]
const uniqueArray = [...new Set(mainArray)];

console.log(uniqueArray); // Output: [1, 2, 3, 5]

// array find method use:
const arr=[1,2,3,4,5,7,6];
console.log("Default Array : " + arr);
const findResult =arr.find((value)=>{
    return value> 4;
})
 
console.log(findResult);
console.log(arr);