const emailArray = ['tizio@gmail.com', 'caio@hotmail.com', 'sempronio@yahoo.com'];
const userEmail = prompt("Inserisci il tuo indirizzo email:");

let checkMail = false;

for (let i = 0; i < emailArray.length; i++) {
    if (emailArray[i] == userEmail) {
        checkMail = true;
    }
}

if (checkMail) {
    console.log(`L'indirizzo email ${userEmail} è presente nell'array.`);
} else {
    console.log(`L'indirizzo email ${userEmail} non è presente nell'array.`);
}