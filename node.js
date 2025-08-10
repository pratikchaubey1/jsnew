// Simple JavaScript Program

// Function to greet a user
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Add two numbers
function add(a, b) {
    return a + b;
}

// Subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}

// Check if a number is even or odd
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Example usage
let userName = "atul";
console.log(greet(userName)); 

console.log("Sum of 5 and 10 is:", add(5, 10)); 
console.log("Difference of 10 and 3 is:", subtract(10, 3));
console.log("Product of 4 and 6 is:", multiply(4, 6));
console.log("Division of 20 by 4 is:", divide(20, 4));
console.log("Check if 7 is even or odd:", checkEvenOdd(7));
console.log("Reverse of 'JavaScript' is:", reverseString("JavaScript"));
