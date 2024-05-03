"use strict"

// --Creo due prompt creando una variabile che chieda le parole
const parola1 = prompt("Inserisci parola 1");
const parola2 = prompt("Inserisci parola 2");

if(parola1.length < parola2.length){
    console.log(parola1 + parola2)
} else if(parola1.length > parola2.length){
    console.log(parola2 + parola1)
}
else{
    console.log(parola1 + parola2)
}