'use strict';

// variabile somma
let somma = 0;

// variabile della lunghezza del numero inserito
const lunghezza = 4;

// richiesta inserimento numero
const numero = prompt(`Inserisci un numero di ${lunghezza} cifre`);

// verifico che sia sempre un numero 
if (!isNaN(numero)) {

    // mi assicuro siano solo e al massimo {lunghezza} cifre
    if (numero.length === lunghezza) {

        // smonto il numero inserito creando un array "momentaneo"
        const numeroSmontato = numero.split('');

        // Ciclo per sommare gli elementi dell'array
        for (let i = 0; i < numeroSmontato.length; i++) {

            // per fare la somma devo prima trasformare gli elementi dell' array "momentaneo" in numeri
            somma += Number(numeroSmontato[i]);
        }

        // stampo il risultato
        console.log(`La somma delle cifre di ${numero} è ${somma}`);
        alert(`La somma delle cifre di ${numero} è ${somma}`);

        // in caso sia un numero più lungo o più corto della lunghezza 
    } else {
        console.log(`Puoi inserire solo un numero di ${lunghezza} cifre!`)
        alert(`Puoi inserire solo un numero di ${lunghezza} cifre!`);
    };

    // in caso non sia un numero
} else {
    console.log(`Non puoi digitare caratteri diversi da numeri`);
    alert(`Non puoi digitare caratteri diversi da numeri`);
};