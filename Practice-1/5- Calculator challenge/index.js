let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let message = document.getElementById('sum-el')

// Create four functions: add(), subtract(), divide(), multiply()
// function erase(){
//     message = "Sum: "
// }

function add(){
    
    let sumTotal = num1 + num2;

    message.innerText = "Sum = " + sumTotal;
}

function subtract(){

    let subsTotal = num1 - num2;

    message.innerText = "Sub = " + subsTotal;
}

function divide(){
    let divTotal = num1 / num2;

    message.innerHTML = "Div = " + divTotal;
}

function multiply(){
    let multTotal = num1 * num2;

    message.innerText = "Mult =" +  multTotal;
}



// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


