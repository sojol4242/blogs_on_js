// higher order function in javascript. A higher order function is a function that either takes a function as an argument or returns a function .

// example:

function hello(name) {
  return function () {
    console.log(`Hello ${name}`);
  };
}

hello("Sojol")();

// there are many types of build in array, string methods like map(),filter(),reduce() etc... are higher order functions

var array = [1, 28, 6, 9, 3];
var trieArray = array.map((e) => e * 3);
console.log(trieArray); // return a new updated array. [3, 84, 18, 27, 9]
var filterArray = array.filter((e) => e < 10);
console.log(filterArray); // this filter function return true or false. new updated array based of which element is less then 10 that is [1, 6, 9, 3]

// my filter method;
function myFilter(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

const filter = [3, 7, 4, 88];
// call and log the myFilter
console.log(
  myFilter(filter, function (f, i, arr) {
    
    return f > 20;
  })
);
