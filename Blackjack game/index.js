let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardEl = document.querySelector('#card-el')


function startGame() {
    if (sum <= 20){
        message = 'Do you want to draw a new card?';
    
    } else if (sum === 21){
        message = "Congrats, you've got a blackjack";
        hasBlackJack = true;
    } else {
        message = "You're out, better luck next time!";
        isAlive = false;
    }

    cardEl.textContent += firstCard + ' - ' + secondCard;
    sumEl.textContent += sum;
    messageEl.textContent =  message;
    
    // console.log(message);
}



