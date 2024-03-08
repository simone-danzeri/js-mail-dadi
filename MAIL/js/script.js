// MAIL

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Mi devo creare un array con le mail di chi può accedere
const  mailList = ['pippo@mail.it' , 'pluto@mail.it' , 'minnie@mail.it' , 'topolino@mail.it' , 'paperino@mail.it' , 'gastone@mail.it' , 'paperinik@mail.it' , 'clarabella@mail.it' , 'gambadilegno@mail.it' , 'cip@mail.it' , 'ciop@mail.it'];
// console.log(mailList);
// Devo chiedere all'utente la sua mail
const userMail = prompt('Ciao! Dimmi la tua mail');
// console.log(userMail);
// Mi creo variabile FLAG per poter checkare la presenza della mail dell'utente nell'array di mail (per il prossimo punto)
let flagMail = false;
let alertMessage = 'Mi spiace ma non sei nella lista'
// Devo controllare se la mail fornita dall'utente è presente nell'array con le mail
for (let i = 0; i < mailList.length; i++) {
    everyMail = mailList[i];
    // Se la mail dell'utente è presente faccio alert con 'puoi entrare'
    if (userMail === everyMail) {
        flagMail = true;
        alertMessage = 'Sei nella lista quindi puoi entrare!';
    }
}
console.log(alertMessage);
alert(alertMessage);