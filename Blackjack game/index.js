let firstCard = 11;
let secondCard = 10;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardEl = document.querySelector('#card-el')

function startGame(){
    rendertGame();  
}

function rendertGame() {
    cardEl.textContent = 'Cards: ' + cards[0] + ' - ' + cards[1];
    sumEl.textContent = 'Sum: ' + sum;

    if (sum <= 20){
        message = 'Do you want to draw a new card?';
    
    } else if (sum === 21){
        message = "Congrats, you've got a blackjack";
        hasBlackJack = true;
    } else {
        message = "You're out, better luck next time!";
        isAlive = false;
    }

    messageEl.textContent =  message;
    
    // console.log(message);
}
function newCard() {
    let thirdCard = 4;
    sum += thirdCard;
    rendertGame();
}



