// Store purchase amount
let amount = 4500;   // Change this value to test

let discount = 0;
let finalAmount = 0;

// Apply discount rules
if (amount >= 5000) {
    discount = amount * 0.20;
} 
else if (amount >= 3000) {
    discount = amount * 0.10;
} 
else {
    discount = 0;
}

// Calculate final payable amount
finalAmount = amount - discount;

// Display results
console.log("Purchase Amount: " + amount);
console.log("Discount: " + discount);
console.log("Final Payable Amount: " + finalAmount);
