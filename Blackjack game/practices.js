// CREATING A STRING LIST WITH EXPERIENCE, EDUCATION, LICENSES, SKILS,, ETC.

let personalFeatures = [
    "Fluent in English, being that I am not from the US.",
    "Intermediate level HTML developer",
    "Intermediate level CSS developer",
    "Starting to get a grasp on JavaScript",
    "Proficient at Figma",
    "Eager to learn and positive when stuck on a problem"
]


console.log(personalFeatures[5]);
console.log(personalFeatures[3]);
console.log(personalFeatures[4]);
console.log(personalFeatures[0]);
console.log(personalFeatures[2]);
console.log(personalFeatures[1]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// CCREATE AN ARRAY DESCRIBING YOURSELF WITH YOUR NAME, AGE AND IF YOU LIKE PIZZA

let myself = [
    "Giovanni Ticas",
    21,
    true
]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// ADDING ITEMS TO AN ARRAY

// let cards = [
//     7,
//     4
// ]

// cards.push(6);

// console.log(cards);



// ADDING ITEMS TO AN ARRAY (practice)

let message = [
    "Hey, how's it going?",
    "I'm gr8! wby?"
]

let newMessage = "Fine as well";


message.push(newMessage);
console.log(message);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// FOR LOOPS 

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
// for ( let count = 10;  count < 21;  count++ )  {
    
//     console.log(count)

// }

// for ( let loop = 10; loop < 101; loop += 10){
//     console.log(loop);
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FOR LOOPS AND ARRAYS

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "hello"
// ]

// for ( let i = 1; i < messages.length; i++){
//     console.log(messages[i]);
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let cards = [
    7,
    4,
    6
]
for (let i = 0; i < cards.length; i++ ){

    console.log(cards[i]);
}



















