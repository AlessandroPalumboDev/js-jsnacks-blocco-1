'use strict';

// array vuoto
const numeriDispari = [];

// Quanti numeri sono richiesti
const count = 6

// richieste tramite prompt
for (let i = 1; i <= count; i++){
    const numero = parseInt(prompt(`Digita il ${i}° numero di ${count}`))

    // verifico che sia sempre un numero 
    if (!isNaN (numero)){

        // se è un numero dispari
        if (numero % 2 != 0){
        // aggiungo ad array
        numeriDispari.push(numero);
        };

    // in caso non sia un numero
    }else {
        console.log(`Il ${i}° dato inserito non è un numero`);
    
        // rimuovo dal contatore il valore che non è un numero
        i--;
    };
};

console.log(`I numeri dispari inseriti sono ${numeriDispari}`);





