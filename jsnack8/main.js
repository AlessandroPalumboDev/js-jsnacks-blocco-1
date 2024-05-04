'use strict';

// variabile somma
let somma = 0;

// variabile della lunghezza del numero inserito
const lunghezza = 4;

// richiesta inserimento numero
const numero = prompt(`Inserisci un numero di ${lunghezza} cifre`);

 // verifico che sia sempre un numero 
 if (!isNaN (numero)){

    // mi assicuro siano solo e al massimo {lunghezza} cifre
    if (numero.length === lunghezza){

         // smonto il numero inserito creando un array "momentaneo"
         let numeroSmontato = numero.split('');
         console.log(numeroSmontato)
 




    // in caso sia un numero più lungo o più corto della lunghezza 
    } else{
        console.log(`Puoi inserire solo un numero di ${lunghezza} cifre!`)
        alert(`Puoi inserire solo un numero di ${lunghezza} cifre!`);
    };

// in caso non sia un numero
}else {
console.log(`Non puoi digitare caratteri diversi da numeri`);
alert(`Non puoi digitare caratteri diversi da numeri`);
};