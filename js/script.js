// // DADI

// // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// let userNumber;
// let computerNumber;

// userNumber = Math.floor(Math.random() * 6) + 1;
// computerNumber = Math.floor(Math.random() * 6) + 1;
// console.log(userNumber);
// console.log(computerNumber);
// // Stabilire il vincitore, in base a chi fa il punteggio più alto.
// let winnerMessage;

// if (userNumber > computerNumber) {
//     winnerMessage = 'Complimenti hai vinto!'
// } else if (userNumber < computerNumber) {
//     winnerMessage = 'Peccato hai perso!'
// } else {
//     winnerMessage = 'Pareggio!'
// }
// alert(winnerMessage);



// MAIL

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Mi devo creare un array con le mail di chi può accedere
const  mailList = ['pippo@mail.it' , 'pluto@mail.it' , 'minnie@mail.it' , 'topolino@mail.it' , 'paperino@mail.it' , 'gastone@mail.it' , 'paperinik@mail.it' , 'clarabella@mail.it' , 'gambadilegno@mail.it' , 'cip@mail.it' , 'ciop@mail.it'];
// console.log(mailList);
// Devo chiedere all'utente la sua mail
const userMail = prompt('Ciao! Dimmi la tua mail');
console.log(userMail);
// Mi creo variabile FLAG per poter checkare la presenza della mail dell'utente nell'array di mail (per il prossimo punto)
let flagMail = false;
// Devo controllare se la mail fornita dall'utente è presente nell'array con le mail
for (let i = 0; i < mailList.length; i++) {
    console.log(mailList[i]);
}
// Se la mail dell'utente è presente faccio alert con 'puoi entrare'
// Altrimenti faccio alert con 'non puoi entrare'