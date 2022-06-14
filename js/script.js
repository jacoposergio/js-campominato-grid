// TODO| L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// TODO| con difficoltà 1 => tra 1 e 100
// TODO| con difficoltà 2 => tra 1 e 81
// TODO| con difficoltà 3 => tra 1 e 49
// TODO| Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// TODO| I numeri nella lista delle bombe non possono essere duplicati.
// TODO| In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// TODO| se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// TODO| Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// TODO| Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.

// ! chiedo all'utente di inserire la difficoltà
let difficulty = prompt('Seleziona una difficoltà');
console.log("",difficulty);

// ! con lo switch imposto i range di difficoltà per i da 1 a 3

let gameMaxRange;
switch(difficulty) {
    case '1':
        gameMaxRange = 100;
        break;
    case '2':
        gameMaxRange = 81;
        break;
    case '3':
        gameMaxRange = 49;
        break;
    default:
        gameMaxRange = alert('Refresha la pagina e inserisci un valore da 1 a 3') ;
}
console.log(gameMaxRange);

// ! il computer genera 16 numeri casuali nel range prescelto

// ! creo l 'array vuoto da riempire
const bombsArray = [];
// ! uso il ciclo while per mettere la condizione che deve scorrere finchè non trova solo numeri diversi,
// ! gameMaxRange darà il range del livello scelto
while (bombsArray.length < 16){
    const randomNumbers = Math.floor(Math.random() * gameMaxRange) + 1;
    if(!bombsArray.includes(randomNumbers)){
        bombsArray.push(randomNumbers);
    }
    console.log("array",bombsArray);
}

// ! creo l'array da riempire con i numeri dell utente

// let gameLost;
const userNumberArray = [];
while(userNumberArray.length < 16 /*&& gameLost === lost*/){

 const userNumber = parseInt(prompt('Dimmi un numero'));
 if(!bombsArray.includes(userNumber)){
    userNumberArray.push(userNumber);
 }else if (bombsArray.includes(userNumber)){
   alert('hai perso');
   break;
 }
}