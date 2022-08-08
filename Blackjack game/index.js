let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardEl = document.querySelector('#card-el')

function getRandomCard(){
    return 5
}


function startGame(){
    rendertGame();  
}

function rendertGame() {
    cardEl.textContent = 'Cards: ';
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
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
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard)
    rendertGame();
}



