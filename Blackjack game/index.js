
let player ={
    name: "Giovanni Ticas",
    chips: 15
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardEl = document.querySelector('#card-el');
let playerEl = document.querySelector('#player-el');

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let rdmCrd = Math.floor(Math.random() * 13) + 1;
    if (rdmCrd > 10 ){
        return 10;
    } else if (rdmCrd === 1 ){
        return 11
    } else {
        return rdmCrd;
    }

    return rdmCrd;
}

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    
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
    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard();
        sum += thirdCard;
        cards.push(thirdCard)
        rendertGame();
    }
   
}



