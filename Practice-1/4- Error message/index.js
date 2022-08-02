// When the user clicks the purchase button, render out
//  in the paragraph
// that has the id="error".

let error = document.getElementById('error');

function errorMessage(){
    let message = "Something went wrong, please try again";
    error.innerText += message;
}