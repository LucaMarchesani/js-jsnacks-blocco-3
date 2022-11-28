// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto


// chiedo all'utente di inserire un numero tra 1 e 10 con un prompt.
userNumber = parseInt(prompt('Inserisci un nuomero compreso tra 1 e 10!'));

//non sapendo quante interazioni tra utente e prompt ci saranno apro un ciclo while.
while ((userNumber < 1) || (userNumber > 10)){

    //richiamo il prompt all'interno del while 
    userNumber = parseInt(prompt('Inserisci un nuomero compreso tra 1 e 10!'));
}

//stampo in console il numero utente se risponde alle condizioni del while
console.log(userNumber);

