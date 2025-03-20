// INIZIO PRIMO ESERCIZIO
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
let valid = false; // Diachiaro una variabile che mi serve come check
let myMail; // Dichiaro una variabile che conterrà la mail da cercare

while (!valid){ // Ciclo while per verificare che l'email inserita rispetti certi parametri in caso contrario la faccio reinserire
    myMail = prompt(`Inserisci la tua mail`); // Faccio inserire la mail dell'utente tramite prompt
    if (myMail.includes(`@`) && (myMail.includes(`.com`) || myMail.includes(`.net`) || myMail.includes(`.org`))){ // Parametri per email valide
        valid = true; // Se l'email rispetta i parametri assegno true alla variabile che fa terminare il ciclo
    } else { // Altrimenti
        alert(`Email non valida!`)// Se non rispetta i parametri il ciclo si ripete e l'utente deve reinserire nuovamente l'email
    }
}

let flag = false; // Diachiaro una variabile che mi serve come check
let index; // Diachiaro una varibile da usare sucessivamente per trovare l'indice

let myMailTemp = myMail.toLowerCase(); // Diachiaro una variabile che contiene la mail inserita dall'utente in minuscolo

for (let i = 0; i < listaInvitati.length && !flag; i++){ // Inizio un ciclo che mi scorre l'array con le mail e si ferma o alla fine della lista o quanto viene trovalo l'elemento cercato
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

//--------------------------------------------------------------------------------------------------------------------------------------------

//INIZIO SECONDO ESERCIZIO
//Esercizio gioco dei dadi
alert(`Secondo esercizio sul gioco dei dadi`); // Avviso inizio secondo esercizio
console.log(`Secondo esercizio sul gioco dei dadi`); // Avviso inizio secondo esercizio

alert(`Benvenuto al gioco dei dadi!\nprocedi per tirare il dado\nIl numero sarà compreso tra 1 e 6`); // Benvenuto all'utente
console.log(`Benvenuto al gioco dei dadi!\nprocedi per tirare il dado\nIl numero sarà compreso tra 1 e 6`); // Benvenuto all'utente

let myNum = Math.floor(Math.random() * 6 + 1); // Genero un numero ccasuale per l'utente
alert (`Il tuo numero è ${myNum}`); // Avviso l'utente su quale numero è uscito
console.log(`Il tuo numero è ${myNum}`); // Avviso l'utente su quale numero è uscito

let pcNum = Math.floor(Math.random() * 6 + 1); // Genero un numero ccasuale per il pc
alert (`Il numero del computer è ${pcNum}`); // Avviso l'utente su quale numero è uscito al pc
console.log(`Il numero del computer è ${pcNum}`); // Avviso l'utente su quale numero è uscito al pc

if (myNum > pcNum){ // Blocco condizonale per verficare se il numero dell'utente è maggiore del numero del pc
    alert(`Hai vinto!`); // Se è maggiore l'utente ha vinto
    console.log(`Hai vinto!`);
} else if (myNum < pcNum){ // Se è minore
    alert(`Hai perso!`); // Ha perso
    console.log(`Hai perso!`);
} else { // altrimenti
    alert(`È un pareggio`); // È un pareggio
    console.log(`È un pareggio`);
}
// FINE SECONDO ESERCIZIO