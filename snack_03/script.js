/* Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente
 e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.*/

const numberList = [];
console.log(numberList);

let userNumber;
let somma = 0;

do{
    userNumber = parseInt(prompt('Inserisci un numero'));
    
    somma = somma + userNumber;
    
    numberList.push(userNumber);
    
} while (somma < 50);

console.log(somma);



