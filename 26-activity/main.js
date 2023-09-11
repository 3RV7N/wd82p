//Problem 1: Sum of Two Numbers
//Write a JavaScript function called addNumbers that takes two numbers as parameters and returns their sum.

function addNumbers() {
  num1 = 9;
  num2 = 8;

  let sum = num1 + num2;

  return sum;
}

console.log(addNumbers());

//Problem 2: Factorial of a Number
//Write a JavaScript function called factorial that calculates the factorial of a given number. The factorial of a number n is the product of all positive integers from 1 to n.

var number = 4;
if (number < 0) {
  console.log("Error");
} else if (number === 0) {
  console.log(`The factorial of ${number} is 1.`);
} else {
  let fact = 1;
  for (i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(fact);
}

//Problem 3: Reverse a String
//Write a JavaScript function called reverseString that takes a string as input and returns the reversed string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello, world"));

//Problem 4: Find the Largest Number in an Array
//Write a JavaScript function called findLargestNumber that takes an array of numbers as input and returns the largest number in the array.

var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = array[0];

for (i = 0; i <= largest; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}
console.log(largest);

//Problem 5: Palindrome Checker
//Write a JavaScript function called isPalindrome that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same forwards and backwards, ignoring spaces, punctuation, and capitalization.

function isPalindrome(str) {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  const reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
}

const inputString = "A man, a plan, a canal, Panama";
const isPalindromic = isPalindrome(inputString);
console.log(`Is "${inputString}" a palindrome? ${isPalindromic}`);
