const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName("Carlo", "Dacuyan"));
console.log(fullName("Jose", "Rizal"));
console.log(fullName("Juan", "Pablo"));

//1. write a function called multiply that takes 2 numbers and returns thier product
function add7(num) {
  return num + 7;
}
console.log(add7(2));

//2.write a function called multiply that takes 2 numbers and returns thier product
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(5, 6));

//3.write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or Both.

function capitalize(string) {
  const lowerString = string.toLowerCase();
  const firstLetter = lowerString.charAt(0);
  const capitalizedFirstLetter = firstLetter.toUpperCase();

  return capitalizedFirstLetter + lowerString.substring(1);
}

console.log(capitalize("ErViN"));

//4. Write a function called lastletter that takes a string and returns the very last letter of that string:

function lastLetter(string) {
  return string.charAt(string.length - 1);
}

console.log(lastLetter("abcde"));

let userInput = parent(prompt("Enter a number"));

for (let i = 1; i <= userInput; i++) {
  if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}
