// Store a number
let num = 7;   // Change this value to test

// Check Positive or Negative using ternary operator
let result = (num >= 0) ? "Positive" : "Negative";
console.log("The number is: " + result);

// Check Even or Odd using if-else
if (num % 2 === 0) {
    console.log("The number is Even");
} else {
    console.log("The number is Odd");
}

// Print numbers from 1 to given number using loop
console.log("Numbers from 1 to " + num + ":");

for (let i = 1; i <= num; i++) {
    console.log(i);
}
