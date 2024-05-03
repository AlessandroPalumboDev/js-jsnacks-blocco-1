"use strict"

// variabile della somma iniziale a 0 
let somma = 0;

// Quanti numeri sono richiesti
const count = 10

// richieste tramite prompt
for (let i = 1; i <= count; i++){
    const numero = Number(prompt(`Digita il ${i}° numero di ${count}`))

    // verifico che sia sempre numeri
    if (!isNaN (numero)){
        somma += numero;
    }else {
        console.log(`Il ${i}° dato inserito non è un numero`);
    
        // rimuovo dal contatore il valore che non è un numero
        i--;
    };
};
console.log(`La somma totale dei ${count} numeri è ${somma}`)

