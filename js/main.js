// L’utente inserisce due numeri in successione, con due prompt.

// var num1 = parseInt(prompt("Inserisci un numero"));
// console.log(num1);
// var num2 = parseInt(prompt("Inserisci un' altro numero"));
// console.log(num2);

// // Il software stampa il maggiore

// if (num1 > num2){
//    console.log("il numero1 è maggiore");

// }else if(num1 < num2){
//    console.log("il numero2 è maggiore");
// }else{
//    console.log("i numeri sono pari");
// }


// ======================================================

// L’utente inserisce due parole in successione, con due prompt.
// var parola1 = prompt("inserisci una parola");
// console.log(parola1);
// var parola2 = prompt("inserisci un'altra parola");
// console.log(parola2);
// Il software stampa prima la parola più corta, poi la parola più lunga.


   // if(parola1.length > parola2.length){
   //    console.log("la parola più corta è: " + parola2);
   //    console.log("la parola più lunga è: " + parola1);
   // }else if(parola1.length < parola2.length){
   //    console.log("la parola più corta è: " + parola1);
   //    console.log("la parola più lunga è: " + parola2);
   // }else{
   //    console.log("le parole sono uguali");
   // }



// ======================================================

// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti

// var num = [];

// for(var i=0; i<5; i++){
//    num[i] = parseInt(prompt("inserisci un numero"));
// }

// var somma = 0;
// var media = 0;

// console.log("i numeri inseriti sono: ");

// for(i=0; i<num.length; i++){
//    console.log(num[i]);
//    somma = somma + num[i];
// }

// media = somma / num.length;

// console.log("la somma è di: " + somma);
// console.log("la media è di: " + media);



// =========================================================

// il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// var num = [];

// for(i = 0; i < 5; i++){
//    num.push(parseInt(prompt("Inserisci un numero"))); 
// }

// var somma = 0;

// console.log("i num inseriti sono: ")

// // for(i = 0; i < num.length; i++){
// //    console.log(num[i]);
// //    somma = somma + num[i];
// // }

// // console.log("la somma è di: " + somma);

// var i = 0;

// while(i < num.length){
//    console.log(num[i]);
//    somma += num[i];
//    i++;
// }

// console.log("la somma è di: " + somma);


// =========================================================

// // Crea un array vuoto.
// var myArray = [];
// // Chiedi per 6 volte all’utente di inserire un numero,
// for(i = 0; i < 6; i++){
//    var nuovoNumero = parseInt(prompt("Inserisci un numero"));
//    // se è dispari inseriscilo nell’array
//    if(nuovoNumero % 2 != 0)
//    myArray.push(nuovoNumero);
// }
// console.log(myArray);

// =========================================================

// Inserisci un numero,
// var num = parseInt(prompt("inserisci un numero"));
// // se è pari stampa il numero,
// if(num % 2 == 0){
//    console.log(num);
// }
// // se è dispari stampa il numero successivo
// else{
//    console.log(num + 1);
// }

// =========================================================

// // Generatore di “nomi cognomi” casuali:
// // prendendo una lista di nomi e una lista di cognomi,
// var nomi = ["Davide", "Giovanni", "Fabio"];
// var cognomi = ["Rossi", "Verdi", "Gialli"];
// // Gatsby vuole generare una falsa lista di invitati.
// var random = nomi[Math.floor(Math.random()*nomi.length)] + " " + cognomi[Math.floor(Math.random()*cognomi.length)];
// console.log(random);

// =========================================================
// // Crea un array di numeri interi
// var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// // e fai la somma di tutti gli elementi che sono in posizione dispari
// var somma = 0;

// for(i = 1; i < numeri.length; i+=2){
//    somma += numeri[i];
// }
// console.log(somma);

// =========================================================

// // Crea due array che hanno un numero di elementi diversi.
// var myArray1 = ["ciao", "solo", "uno"];
// var myArray2 = ["solo", "uno"];

// // Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
// if (myArray1.length == myArray2.length){

//    console.log("i 2 array sono uguali");

// }else if (myArray1.length > myArray2.length){

//    var maggioreArray = myArray1;
//    var minoreArray = myArray2;

// }else {
//    var maggioreArray = myArray2;
//    var minoreArray = myArray1;
// }

// var confronto = maggioreArray.length - minoreArray.length;
// // console.log(delta);

// for(var i = 0; i < confronto; i++){

//    var randomNumero = Math.floor((Math.random() * 100) + 1);
//    minoreArray.push(randomNumero);
// }

// console.log(maggioreArray);
// console.log(minoreArray);

// =========================================================

// Inserire 5 numeri e contare quanti multipli di 3 sono stati inseriti.

// var i = 0;
// var numbers = [];
// var userNumbres;

// while (i < 5){
//    userNumbres = parseInt(prompt("inserisci un numero"));
//    if((userNumbres % 3) == 0){
//       numbers.push(userNumbres);
//    }
//    i++
// }

// console.log(numbers.length);


