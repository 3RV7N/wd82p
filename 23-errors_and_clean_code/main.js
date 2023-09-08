// Errors and Clean Code
// const a = "Hello";
// const b = "World";

// console.log(c);

//Syntax Error
// function printHelloWorld() {
//  console.log "Hello, World!";
// }

// Type Error
// -> an operand or argument passed to a function is not of the expected type by that operator of function.
// -> or when attempting to modify a value that cannot be chaned;
// -> or when attempting to use a value in an inappropriate way.

// const name = "Ervin";
// name = "Ervin";

// Clean Code

// Naming functions and variables
// -> meaningful
// -> descriptive

// Use a consistent vocabulary or naming convention

const x = function(z) {
  let w = 0;z.forEach(
    function (q) {
      w += q;
    }
  );return w;
};

x([2, 2, 2]);

function sumArray(array) {
  let sum = 0;

  array.forEach((number) -> sum += number);

  return sum;
}

sumArray ([2, 2, 2]);