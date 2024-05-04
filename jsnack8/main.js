'use strict';

// variabile somma
let somma = 0;

// variabile della lunghezza massima del numero inserito
const lunghezzaMassima = 4;

// richiesta inserimento numero
const numero = prompt(`Inserisci un numero di ${lunghezzaMassima} cifre`);

 // verifico che sia sempre un numero 
 if (!isNaN (numero)){

    // mi assicuro siano solo e al massimo {lunghezzaMassima} cifre
    if (numero.length === lunghezzaMassima){




    // in caso sia un numero più lungo o più corto della lunghezza massima
    } else{
        console.log(`Puoi inserire solo un numero di ${lunghezzaMassima} cifre!`)
        alert(`Puoi inserire solo un numero di ${lunghezzaMassima} cifre!`);
    };

// in caso non sia un numero
}else {
console.log(`Non puoi digitare caratteri diversi da numeri`);
alert(`Non puoi digitare caratteri diversi da numeri`);
};