// Esercizio delle mail
alert(`Primo esercizio sulla lista delle mail`); // Avviso inizio primo esercizio
console.log(`Primo esercizio sulla lista delle mail`); // Avviso inizio primo esercizio
const listaInvitati = [
    `mario.rossi@example.com`, 
    `anna.bianchi@domain.com`, 
    `luca.verdi@mail.net`, 
    `francesca.russo@email.org`, 
    `giuseppe.troisi@demo.com`, 
    `sara.martini@sample.net`, 
    `marco.delfino@test.org`, 
    `elisa.ferrari@mailservice.com`, 
    `alessandro.fontana@provider.net`, 
    `laura.novelli@fakeemail.org`]; // Diachiaro una variabili che contiene la lista degli invitati
const myMail = prompt(`Inserisci la tua mail`); // Dichiaro una variabile che contiene la mail dell'utente che inserisce tramite prompt
let flag = false; // Diachiaro una variabile che mi serve come check
let index; // Diachiaro una varibile da usare sucessivamente per trovare l'indice

let myMailTemp = myMail.toLowerCase(); // Diachiaro una variabile che contiene la mail inserita dall'utente in minuscolo

for (let i = 0; i < listaInvitati.length && !flag; i++){ // Inizio un ciclo che mi scorre l'array con le mail e si ferma o lla fine della lista o quanto viene trovalo l'elemento trovato
    if (myMailTemp === listaInvitati[i]){ // Se la mail inserita dall'utente combacia con una della lista allora:
        flag = true; // La variabilie flag gli assegno valore true
        index = i + 1; // Assegno alla variabile index la posizione dell'elemento trovato
    } // Chiudo blocco if
} // Chiudo blocco for

if (flag) { // Apro blocco if che mi stampa se ha trovato l'elemento oppure no
    console.log(`Elemento trovato in posizione ${index}`); // Se flag è true l'elemento è stato trovato
    alert(`Elemento trovato in posizione ${index}`); // Stampa tramite alert
} else { // Altrimenti
    console.log(`Elemento non trovato`); // L'elemento non è stato trovato
    alert(`Elemento non trovato`); // Stampa tramite alert
} // Chiudo blocco if
//FINE PRIMO ESERCIZIO

//Esercizio gioco dei dadi
alert(`Secondo esercizio sul gioco dei dadi`); // Avviso inizio secondo esercizio
console.log(`Secondo esercizio sul gioco dei dadi`); // Avviso inizio secondo esercizio

alert(`Benvenuto al gioco dei dadi!\nprocedi per tirare il dado\nIl numero sarà compreso tra 1 e 6`); // Benvenuto all'utente
console.log(`Benvenuto al gioco dei dadi!\nprocedi per tirare il dado\nIl numero sarà compreso tra 1 e 6`); // Benvenuto all'utente
let myNum = Math.floor(Math.random() * 6); // Genero un numero ccasuale per l'utente
alert (`Il tuo numero è ${myNum}`); // Avviso l'utente su quale numero è uscito
console.log(`Il tuo numero è ${myNum}`); // Avviso l'utente su quale numero è uscito
let pcNum = Math.floor(Math.random() * 6); // Genero un numero ccasuale per il pc
alert (`Il numero del computer è ${pcNum}`); // Avviso l'utente su quale numero è uscito al pc
console.log(`Il numero del computer è ${pcNum}`); // Avviso l'utente su quale numero è uscito al pc