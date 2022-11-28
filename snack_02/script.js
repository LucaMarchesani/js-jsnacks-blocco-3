// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

//chiedo all'utente di scrivere un testo
let userText = prompt('inserisci un testo');

//creo un array con 5 elementi
const listaUno = [
    'rosso',
    'giallo',
    'verde',
    'blu',
    'viola'
];

//creo un array con 8 elementi
const listaDue = [
    'cane',
    'gatto',
    'pesce',
    'cavallo',
    'elefante',
    'tartaruga',
    'balena',
    'falco'
];

//apro un ciclo while dove dico che listaUno e listaDue hanno lunghezze diverse
while(listaUno.length != listaDue.length){
    
    //se la lunghezza di listaUno e minore di listaDue allora#
    if (listaUno.length < listaDue.length){

        //#aggiungo elementi inserito dall'utente fino a che le liste non hanno la stessa lunghezza
        listaUno.push(userText);
    }

    else{
        listaDue.push(userText);
    }
}

console.log(listaUno, listaDue);



