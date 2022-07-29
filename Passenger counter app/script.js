//INCREMENT BUTTON
let countEl = document.getElementById('count-el');
let countIncrement = 0 

let saveEl = document.getElementById('save-el');

function increment(){
    countIncrement += 1;

    countEl.textContent = countIncrement;

}

// SAVE BUTTON
function save(){

// DISPLAY INFORMATION SAVED
    let numberCounted = countEl.innerText + ' - ';
    saveEl.textContent += numberCounted; 

// SET COUNT BACK TO 0
    countIncrement = 0;
    countEl.textContent = countIncrement;
}




















