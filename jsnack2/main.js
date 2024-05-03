"use strict"

// --Creo due prompt creando una variabile che chieda le parole
const parola1 = prompt("Inserisci parola 1");
const parola2 = prompt("Inserisci parola 2");
// Se la lunghezza della prima parola è più corta la stampo per prima
if(parola1.length < parola2.length){
    console.log(parola1 + parola2)
// Se la lunghezza dell aprima parola è più lunga la stampo per seconda
} else if(parola1.length > parola2.length){
    console.log(parola2 + parola1)
}
// Se la lunghezza delle due parole è identica stampa in ordine di inserimento
else{
    console.log(parola1 + parola2)
}