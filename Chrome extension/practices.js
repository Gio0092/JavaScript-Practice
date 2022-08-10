// EVENT LISTENER PRACTICE

let inputBtn = document.getElementById('input-btn');

inputBtn.addEventListener('click', function(){
    console.log("I want to open the box!")
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CONST AND LET PRACTICE

const playerName = "Giova";
let credits = 45;

credits = credits + 10;

// If possible, use CONST. If not, use LET.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
