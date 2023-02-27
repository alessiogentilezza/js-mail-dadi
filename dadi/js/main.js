let numeroUtente = Math.floor(Math.random() * 6) + 1;
console.log('Numero Utente ' + numeroUtente);

let numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log('Numero Computer ' + numeroComputer);

if (numeroComputer > numeroUtente) {
    console.log("Vince il computer");

} else if (numeroComputer < numeroUtente) {
    console.log("Vince l'utente");
} else {
    console.log('Il risultato è in parità');
}
