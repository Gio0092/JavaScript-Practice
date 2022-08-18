let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

let scoreBtn = document.querySelector('#score-btn');

scoreBtn.addEventListener('click', function(){
    console.log(data[0].player);
})


// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
