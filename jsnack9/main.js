'use strict'

// RIUTILIZZO IL CODICE DI JSNACK3 PER LA SOMMA

// variabile della somma iniziale a 0 
let somma = 0;

// Quanti numeri sono richiesti
const count = 10

// richieste tramite prompt
for (let i = 1; i <= count; i++){
    const numero = Number(prompt(`Digita il ${i}° numero di ${count}`))

    // verifico che sia sempre un numero
    if (!isNaN (numero)){
        somma += numero;
    }else {
        console.log(`Il ${i}° dato inserito non è un numero`);
    
        // rimuovo dal contatore il valore che non è un numero
        i--;
    };
};
console.log(`La somma totale dei ${count} numeri è ${somma}`);

// AGGIUNGO CODICE PER CALCOLO DELLA MEDIA
// --divido la somma per la quantità di numeri per ottenere la media e stampo
console.log(`La media dei ${count} numeri è ${somma / count}`);


