// javascript date object:

const today=new Date();
 
console.log(today); // ISO format date
// Date format;
// ISO Date	"2015-03-25" (The International Standard)
const d = new Date("2020-09-25");
console.log(d);
// ISO Dates (Year and Month)
const d1 = new Date("2021-03");
console.log("ISO year and month",d1);
// ISO Dates (Year )
const d2 = new Date("2022");
console.log("ISO year ",d2);

// Short Date	"03/25/2015"
const shortDate = new Date("03/25/2015");
console.log(shortDate);

// Long Date	"Mar 25 2015" or "25 Mar 2015"
const longDate = new Date("Mar 25 2015");
console.log(longDate);

// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

// Date.parse() returns the number of milliseconds between the date and January 1, 1970:

// Example
let miliSec = Date.parse("March 21, 2012");
console.log(miliSec);
// milliseconds to date object
const date= new Date(miliSec);
console.log(date);
// build in function in javascript;
/*
set Function;

setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970
*/
 
/*
get Function;

getDate()	get the day as a number (1-31)
getFullYear()	get the year (optionally month and day)
getHours()	get the hour (0-23)
getMilliseconds()	get the milliseconds (0-999)
getMinutes()	get the minutes (0-59)
getMonth()	get the month (0-11)
getSeconds()	get the seconds (0-59)
getTime()	get the time (milliseconds since January 1, 1970
*/





