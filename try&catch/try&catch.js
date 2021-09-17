// The try, catch   blocks are used to handle exceptions (a type of an error). Before you learn about them, you need to know about the types of errors in programming

// These errors that occur during runtime are called exceptions. Now, let's see how you can handle these exceptions.

// JavaScript try...catch
// The catch block handles the errors as per the catch statements.

// program to show try...catch in a program

const number = 100,
  string = "shahil";

try {
  // Block of code to try
  console.log(number / string);

  // forgot to define variable a
  console.log(a);
} catch (error) {
  // error body
  console.log("Error Block");
  console.log("Error message: " + error);
}
