// EVENT LISTENER PRACTICE

// let inputBtn = document.getElementById('input-btn');

// inputBtn.addEventListener('click', function(){
//     console.log("I want to open the box!")
// })
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CONST AND LET PRACTICE

// const playerName = "Giova";
// let credits = 45;

// credits = credits + 10;

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

// TEMPLATE STRINGS/LITERALS

const recipient = "James";
const sender = "Giova"

// transform the following exoression in to a template string
// const email = "Hey " + recipient + "! How is it going? Cheers Per"

const email = `
    Hey ${recipient}!
    How is it going? Cheers
    ${sender}
`
console.log(email)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LOCAL STORAGE

// localStorage.setItem("myLeads", "www.google.com");
// console.log(localStorage.getItem("myLeads"));

// localStorage.clear();
// console.log(localStorage);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ARRAY TO STRINGS

let myLeads = `["Hello","Hi"]`;//STRING

myLeads = JSON.parse(myLeads);//PARSE TURNS IT INTO AN ARRAY AGAIN

myLeads.push("Hola");// ADDS A VALUE INTO THE ARRAY

myLeads = JSON.stringify(myLeads);// STRINGIFY TURNS IT INTO A STRING

// console.log(myLeads);

console.log(myLeads); // LOGS OUT A STRING
console.log(typeof myLeads)// LOGS OUT THE TYPE OF VALUE

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TRUHLY AND FALSY VALUES

//FALSY: false - 0 - "" - null - undefined - NaN (not a number)

//Null -> how a dev signalizes emptiness
//Undefined -> how JavaScript signalizes emptiness

// console.log(Boolean(""));   // false
// console.log(Boolean("0"));  // true
// console.log(Boolean(100));  // true
// console.log(Boolean(null)); // false
// console.log(Boolean([0]));  // true
// console.log(Boolean(-0));   // false

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCTION PARAMETERS

// What are greeting and name?  Parameters
// What are "Howdy" and "James"? Arguments
// What are num1 and num2? Parameters
// What are 3 and 4?    Arguments


//.                parameters
// function greetUser(greeting, name) { 
//     welcomeEl.textContent = `${greeting}, ${name} 👋`
// }

// //.        arguments
// let hi = "Howdy"
// greetUser(hi, "James")

// function add(num1,num2){
//     return num1 + num2;
// }

// console.log( add(3,4));
// console.log( add(9,102));

// Create a function, getFirst(arr), that returns the first item in the array

function getFirst(arr){
    return arr[0];
}


// Call it with an array as an argument to verify that it works

console.log(getFirst([2,4,6,5,8]));