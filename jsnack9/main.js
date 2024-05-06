'use strict'

// variabile della somma iniziale a 0 
let somma = 0;

// variabile della media iniziale a 0 
let media = 0;

// Quanti numeri sono richiesti
const count = 10

// creo ciclo per identificare i primi 10 numeri e sommarli
for (let i = 1; i <= count; i++){
        somma += i; 
};

// calcolo della media
media = (count / somma);

// stampo risultato in console
console.log(`La somma totale dei ${count} numeri è ${somma}, la media invece è ${media}`);