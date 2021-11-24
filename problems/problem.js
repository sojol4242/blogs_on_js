// Find prime number :

// function findPrimeNumber(n) {
//   var div = 2;
//   while (n > div) {
//     if (n % div === 0) {
//       return "Not a prime number";
//     } else div++;
//   }
//   return "Prime number";;
// }
// console.log(findPrimeNumber(11));

//Prime Factors
// function primeFactors(n) {
//   var factors = [],
//     divisor = 2;

//   while (n > 2) {
//     if (n % divisor == 0) {
//       factors.push(divisor);
//       n = n / divisor;
//     //   console.log(n);
//     } else {
//       divisor++;
//     }
//   }
//   return factors;
// }

// console.log(primeFactors(69));

// function greet (person) {
//     if (person =={ name: 'amy' }) {
//       return 'hey amy'
//     } else {
//       return 'hey arnold'
//     }
//   }
//   console.log(result);

//   var result=greet({ name: 'amy' })
//   console.log(result);
// var numbers = [65, 44, 12, 4];
// numbers.forEach(function (item, i, arr) {
//   console.log(arr);
//   console.log(item, i);
// });
// let me = {
//   name: "Ashutosh Verma",
//   thisInArrow:() => {
//   console.log("My name is " + this.name); // no 'this' binding here
//   },
//   thisInRegular(){
//   console.log("My name is " + this.name); // 'this' binding works here
//   }
//  };
//  me.thisInArrow();
//  me.thisInRegular();
// var arr = [20, 120, 111, 215, 54, 78];

// var max=Math.max.apply(null,arr);
// arr.splice(arr.indexOf(max),1);
// var secondMax=Math.max.apply(null,arr);
// console.log(secondMax);

var twoSum = function (nums, target) {
  let i,
    sum = 0;
  //   for (i = 0; i < nums.length; i++) {
  //     sum = sum + nums[i];
  //   }
  //   if (sum === target) {
  //     console.log(sum);
  //     return true;
  //   } else {
  //     console.log(sum);
  //     return false;

  //   }
};

// console.log(twoSum([12, 1, 9, 2, 2],113));


// CGPA counting:
let credit = [3, 3, 3, 3, 1, 2, 1, 1, 0.75];
let gpa = [3, 3.75, 3.75, 3.0, 3.75, 3.5, 3.75, 3.75, 3.75];
let gpaAndCreditSum = 0;
let totalCredit = 0;
// for (let i = 0; i < 9; i++) {
//   let userInput = prompt("Enter Your Credit ");
//   credit.push(parseFloat(~~userInput));
// }

// for (let i = 0; i < 9; i++) {
//   let userInput = prompt("Enter Your Gpa ");
//   gpa.push(parseFloat(~~userInput));
// }

// credit total
for (let i = 0; i < credit.length; i++) {
  totalCredit = totalCredit + credit[i];
}

console.log("Total Credit ",totalCredit);

// credit and gpa total

for (let i = 0; i < 9; i++) {
  let gpaCreditProduct = gpa[i] * credit[i];
  gpaAndCreditSum += gpaCreditProduct;
}
console.log("Gpa and Credit Product ",gpaAndCreditSum);
// result
const result = (gpaAndCreditSum / totalCredit).toFixed(2);

console.log("Your CGPA ", result );
