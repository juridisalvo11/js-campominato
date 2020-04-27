// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.

//In chrome il comando console non mostra i numeri la prima volta che si gioca, dalla seconda volta in po aggiornando la pagina iòììarray con i numeri appare.

//Generare 16 numeri casuali
function genera_random(min,max) {
    var numero = Math.floor(Math.random() * (max - min + 1) + min);
    return numero
}
//Generare array dove andare ad inserire i numeri "mine"
function genera_mine() {
    var array_mine = [];
    for (var i = 0; i < 16; i++) {
        var numeri_pc = genera_random(1, 100)
        array_mine.push(numeri_pc);
    }
    return array_mine;
}

var lista_mine = genera_mine();
console.log(lista_mine);

//Impostare variabile per permettare di falsificare il ciclo Do, While
var continua = true;

//Creare ciclo Do, While dove chiedere il numero all'utente per poter giovcare

do {
    var numero_utente = parseInt(prompt('Inserisci un numero tra 1 e 100'))
    console.log(numero_utente);

    if (lista_mine.includes(numero_utente)) {//Condizione in cui l'utente inserisce un numero presente tra le "mine"
        continua = false;
        console.log('Hai Perso');
    } else { //condizione in cui l'utente inserisce un numero non presente nelle "mine" e può continuare a giocare
        console.log('Vai Avanti');
    }
} while(continua)
