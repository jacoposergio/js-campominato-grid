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

// ! con lo switch imposto i range di difficoltà per i livelli da 1 a 3

let gameRange;
switch(difficulty) {
    case '1':
        gameRange = 'ciao';
        break;
    case '2':
        gameRange = 'buongiorno';
        break;
    case '3':
        gameRange = 'buonasera';
        break;
    default:
        gameRange = alert('Refresha la pagina e inserisci un valore da 1 a 3') ;
}

console.log(gameRange);

