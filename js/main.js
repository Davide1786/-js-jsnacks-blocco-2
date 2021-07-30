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


// Chiediamo all utente la sua eta e comunichiamo l anno di nascita ESERCIZIO1

// var eta = prompt("inserisci la tua eta");
// console.log(eta);

// var anno = 2021;

// var tot = eta - anno;
// console.log(eta - anno);

// ===========================================

// Chiedi il suo nome                                                ESERCIZIO2

// var nome = prompt("Inserisci il tuo nome");

// // Chiedi il cognome

// var cognome = prompt("Inserisci il tuo cognome");

// // Chiedi il colore preferito

// var colorePreferito = prompt("Colore preferito");

// document.getElementById("risultato").innerHTML= nome + cognome + colorePreferito;
// document.getElementById("pasw").innerHTML= ("GG£££wwodasd124");

// ================================================

// Chiediamo all'utente due parole in successione                    ESERCIZIO3

// var parolaUno = prompt("Inserisci una parola");

// var parolaDue = prompt("Inserisci un'altra parola");

// console.log(parolaUno + '' + parolaDue);

// // Andiamo poi a verificare quale delle due parole è più lunga e stampiamola in console

// if(parolaUno.length > parolaDue.length){

//    console.log("paola uno più grande");

// } else if (parolaUno.length < parolaDue.length){

//    console.log("paola due è più grande");

// } else {
   
//    console.log("La parola ha la stessa lunghezza");
// }


// ================================================

// Chiedere all'utente l'eta con 2 prompt gli anni di 2 persone e            ESERCIZIO4
// comunicare quale delle 2 è più grande   

// var utente1 =parseInt(prompt("Inserisci l'eta utente 1"));

// var utente2 =parseInt(prompt("Inserisci l'eta utente 2"));

// // console.log(utente1 + '' + utente2);

// if(utente1 > utente2){
//    console.log("L'età dell' utente1 è maggiore");
// } else if (utente1 < utente2){
//    console.log("L'età dell' utente2 è maggiore");

// } else{
//    console.log("L'età è uguale");
// }

// ================================================

// Chiedere all'utente se vuole pari o dispari e un nemero intero compreso tra 1 e 9            ESERCIZIO5

// generare un numero casuale compreso tra 1 e 9 che sarà la giocata del pc  

// stabilire e comunicare chi ha vinto secondo le regole di pari e dispari

// var pari_dispari = prompt("Inserisci pari o dispari");
// console.log(pari_dispari);

// var numero_giocatore = parseInt(prompt("Inserisci un numero da 1 a 9"));

// var numero_pc = Math.floor(Math.random() * 9) + 1;
// // console.log("numero pc: " + numero_pc);

// console.log("Numero pc: " + numero_pc);

// var somma = numero_giocatore + numero_pc;
// console.log("somma dei due numeri: " + somma);

// if(somma % 2 == 0){

//    var risultato = "pari";

// } else{

//    var risultato = "dispari";
// }

// if(pari_dispari == risultato){

//    console.log("Giocatore vince");

// } else{

//    console.log("pc vince");
// }


// ================================================                                           ESERCIZIO6

/*
Quanto manca:
utilizziamo le funzioni dell'oggetto Date, stabilire l'ora attuale e attraverso una 
operazione matematica stabilire i minuti mancanti allo scaccaer della prossima ora.

*/

// var minutiInUnOra = 60;
// var oraAttuale = new Date();
// // var minutoAttuale = oraAttuale.getMinutes();

// var minutiMancanti = minutiInUnOra - oraAttuale.getMinutes();

// console.log("Alla fine della mia ora mancano " + minutiMancanti + " minuti");


// ===================================================                                       ESERCIZIO7

/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// var km = parseInt(prompt("Quanti km devi percorrere ?"));
// // console.log(km);

// var eta = parseInt(prompt("Quanti anni hai ?"));
// // console.log(eta);

// var prezzoBiglietto = 0.21;

// var prezzoKm = (prezzoBiglietto * km);
// // console.log(prezzoKm);

// var under = (prezzoKm * 20 / 100);

// var over = (prezzoKm * 40 / 100);

// if(eta < 18){
//    var tot = (prezzoKm) - (under);
//    document.getElementById("totale").innerHTML = ("Il prezzo del biglietto è di € " + tot.toFixed(2));

// } else if(eta >= 65){
//    var tot = (prezzoKm) - (over);
//    document.getElementById("totale").innerHTML = ("Il prezzo del biglietto è di € " + tot.toFixed(2));

// }else{
//    document.getElementById("totale").innerHTML = ("Il prezzo del biglietto è di € " + prezzoKm.toFixed(2));
// } 


// ===================================================                                       ESERCIZIO8

// // Stampa i numeri da 0 a 1000
// var num = 1000;
// for(var i = 0; i <= num; i++){
//    console.log( i );
// }

// // Stampa i numeri da 1000 a 0
// var num = 1000;
// for(var i = 1000; i >= num; i--){
//    console.log( i );
// }

// Stampa una lita degli Array
// var insegnanti = ["Paolo", "Alessio", "Filippo"];

// insegnanti.push("Davide"); //integrazione iin un array

// for(var i = 0; i < insegnanti.length; i++){
//    console.log(insegnanti[i]);
// }

// ---------------

// In un array di numeri interi stampare solo i numeri dispari
// var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(var i = 0; i < numeri.length; i++){
   
//    // stampa numeri pari
//    if ((numeri[i] % 2) = !0){
//       console.log(numeri[i]);
   
//       // stampa numeri dispari
//    } else if ((numeri[i] % 2) = 1){
//       console.log(numeri[i])
//    }
// } 

// Sommaare i numeri

// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var sommatoria = 0;

// for(var i = 0; i < num.length; i++){
//    sommatoria = sommatoria + num[i];
// }

// console.log(sommatoria);

// var media = sommatoria / num;
// console.log(media);

// ===================================================                                       ESERCIZIO9

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// var richiesta = prompt("Inserisci la tua mail");

// var lista = ["davide@gmail.com", "pippo@gmail.com", "pluto@gmail.com"];

// for(var i = 0; i < lista.length; i++){

//    if(richiesta == lista[i]){
//       console.log("Utente registrato");
//    }else{
//       console.log("Utente non registrato");
//    }
// }


// ---------------------------

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// var numGiocatore = Math.floor(Math.random() * 6) +1;
// console.log(num);

// var numPc = Math.floor(Math.random() * 6) +1;
// console.log(num);

// if(numGiocatore < numPc){
//    console.log("Pc vince");
// }else if(numGiocatore > numPc){
//    console.log("Giocatore vince");
// }else{
//    console.log("Pari");
// }


// ---------------------------


// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// var parola = prompt("inserisci una parola").toLowerCase();

// var parolaInversa = palindroma(parola);

// if(parola == parolaInversa){
//     console.log('la parola è palindroma');
//   } else {
//     console.log('la parola non è palindroma');
//   }
  
// function palindroma(str){
//   var strInversa = str.split('').reverse().join('').toLowerCase();  
//   return strInversa;
// }

 
// ============================================================

// L’utente sceglie pari o dispari
// e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// var pariDispari = prompt("Scegli pari o dispari");

// var scegliNumero = parseInt(prompt("Scegli un numero da 1 a 5"));

// var numeroRandom = (Math.floor(Math.random() * 5) + 1);

// var generaNumero = numero();
// console.log(numeroRandom);

// console.log(numero());

// function numero(){
   
//    var generaNumero = scegliNumero + numeroRandom;
//    console.log(generaNumero);
   
//    return generaNumero;
// }

// function somma(){

//    if(generaNumero % 2 == 0){

//       console.log("La somma uscita è pari");
//    } else{

//       console.log("La somma uscita è dispari");
//    }

  
// }
// console.log(somma());

// var vincitore = generaSomma % 2 == 0;


// function vince(){

//    if(vincitore == generaSomma){

//    console.log("Giocatore vince");

//    } else{

//    console.log("Pc vince");
// }
// }



// ---------------------------


// controllare se la somma appena calcolata è pari o dispari
// se l'utente ha scelto pari e la somma è pari, vince l'utente, altrimenti vince il pc





