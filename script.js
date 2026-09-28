// SpendWise budget data
let budget = 50000;
let expenses = 15000;

// Get user input
let userBudget = prompt("Enter your budget:");
let userExpenses = prompt("Enter your total expenses:");

// Convert input to numbers
userBudget = Number(userBudget);
userExpenses = Number(userExpenses);

// Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Calculate remaining balance
let balance = calculateBalance(userBudget, userExpenses);

// Display results in the console
console.log("===== SpendWise Budget Report =====");
console.log("Budget:", userBudget);
console.log("Expenses:", userExpenses);
console.log("Remaining Balance:", balance);