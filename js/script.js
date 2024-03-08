// DADI

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let userNumber
let computerNumber

userNumber = Math.floor(Math.random() * 6) + 1;
computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);
console.log(computerNumber);
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let winnerMessage

if (userNumber > computerNumber) {
    winnerMessage = 'Complimenti hai vinto!'
} else if (userNumber < computerNumber) {
    winnerMessage = 'Peccato hai perso!'
} else {
    winnerMessage = 'Pareggio!'
}
alert(winnerMessage);