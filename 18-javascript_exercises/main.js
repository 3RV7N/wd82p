// Exercise 1

//* Declare a variable called 'balance' and assign it a starting
//  balance of 1000.

// Create variables 'transaction1', 'transaction2', and
//'transaction3' to represent three transactions.

// Update the 'balance' variable after each transaction:

// - 'transaction1': Add 500 to 'balance'.

// - 'transaction2': Deduct 200 from 'balance'.

// - 'transaction3': Deduct 1000 from 'balance'.

// Your code here

// Log the final 'balance' after all three transactions.

//let transaction1 = balance + 500;

//console.log(balance);

let balance = 1000;
let transaction1 = +500;
let transaction2 = -200;
let transaction3 = -1000;

console.log(balance + transaction1);
console.log(balance + transaction2);
console.log(balance + transaction3);

// Create three variables 'testScore1', 'testScore2', and
//'testScore3' and assign them different test scores as numbers.

// Calculate the average test score of these three scores and store
//it in a variable called 'averageScore'.

// Round the 'averageScore' to the nearest integer using Math.round().

// Your code here

// Log the 'averageScore' to the console.

let testscore1 = parseFloat(25.456);
let testscore2 = parseFloat(20.345);
let testscore3 = parseFloat(15.353);
let averageScore = Math.round(testscore1 + testscore2 + testscore3);

console.log(averageScore);

// Create a variable called 'temperature' and assign it a
// temperature value in Celsius.

// Write a conditional statement (if-else) to determine the
// weather condition based on the temperature:

// - If the temperature is above 30°C, log "It's hot outside!"

// - If the temperature is between 20°C and 30°C (inclusive),
// log "The weather is pleasant."

// - If the temperature is below 20°C, log "It's a bit chilly."

// Your code here

let temperature = parseInt(prompt("Celsius"));

if (temperature >= 30) {
  console.log("It's hot outside!");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("The weat2her is pleasant.");
} else if (temperature <= 20) {
  console.log("It's a bit chilly.");
} else {
  console.log();
}
