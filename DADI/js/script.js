// DADI

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let userNumber;
let computerNumber;

let userRoll = document.querySelector('#my-roll');
let computerRoll = document.querySelector('#computer-roll');

userNumber = Math.floor(Math.random() * 6) + 1;
computerNumber = Math.floor(Math.random() * 6) + 1;
userRoll.innerHTML = `Il tuo lancio è: ${userNumber}`;
computerRoll.innerHTML = `Il lancio del computer è: ${computerNumber}`; 
console.log(userNumber);
console.log(computerNumber);
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let winnerMessage;

if (userNumber > computerNumber) {
    winnerMessage = 'Complimenti hai vinto!'
} else if (userNumber < computerNumber) {
    winnerMessage = 'Peccato hai perso!'
} else {
    winnerMessage = 'Pareggio!'
}
alert(winnerMessage);