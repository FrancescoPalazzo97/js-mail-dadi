const listaInvitati = [`mario.rossi@example.com`, `anna.bianchi@domain.com`, `luca.verdi@mail.net`, `francesca.russo@email.org`, `giuseppe.troisi@demo.com`, `sara.martini@sample.net`, `marco.delfino@test.org`, `elisa.ferrari@mailservice.com`, `alessandro.fontana@provider.net`, `laura.novelli@fakeemail.org`]; // Diachiaro una variabili che contiene la lista degli invitati
const myMail = prompt(`Inserisci la tua mail`); // Dichiaro una variabile che contiene la mail dell'utente che inserisce tramite prompt
let flag = false; // Diachiaro una variabile che mi serve come check
let index; // Diachiaro una varibile da usare sucessivamente per trovare l'indice

let myMailTemp = myMail.toLocaleLowerCase; // Diachiaro una variabile che contiene la mail inserita dall'utente in minuscolo

for (let i = 0; i < listaInvitati.length && !flag; i++){ // Inizio un ciclo che mi scorre l'array con le mail e si ferma o lla fine della lista o quanto viene trovalo l'elemento trovato
    if (myMail === listaInvitati[i]){ // Se la mail inserita dall'utente combacia con una della lista allora:
        flag = true; // La variabilie flag gli assegno valore true
        index = i + 1; // Assegno alla variabile index la posizione dell'elemento trovato
    } // Chiudo blocco if
} // Chiudo blocco for

if (flag) { // Apro blocco if che mi stampa se ha trovato l'elemento oppure no
    console.log(`Elemento trovato in posizione ${index}`); // Se flag è true l'elemento è stato trovato
} else { // Altrimenti
    console.log(`Elemento non trovato`); // L'elemento non è stato trovato
} // Chiudo blocco if