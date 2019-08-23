// ==== Callbacks ====

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */
const consume = (a, b, cb) => {
  return cb(a, b);
};

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;
const greeting = (firstName, lastName) => `Hello ${firstName} ${lastName}, nice to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume('Mary', 'Poppins', greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:

/**
 * nestedFunction() can access the variable `internal` because nestedFunction's scope
 * includes myFunction's scope. nestedFunction has access to everything defined and/or
 * assigned inside myFunction, however myFunction does not have access to what is
 * defined and/or assigned inside nestedFunction.
 *
 * Of course, it also depends on where our code invokes nestedFunction.
 *
 * I've added a couple more lines of code below that illustrate how closures work.
 */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction(); // we can invoke nestedFunction here becuase we're within the scope in which we declared nestedFunction()
}
myFunction(); // invoking myFunction in turn invokes nestedFunction on line 53. If we comment this line out, nestedFunction is no longer invoked
nestedFunction(); // we can't invoke nestedFunction() here because we don't have access to it in the global scope
