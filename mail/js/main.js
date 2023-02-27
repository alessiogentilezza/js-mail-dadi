const emailArray = ['tizio@gmail.com', 'caio@hotmail.com', 'sempronio@yahoo.com'];
const userEmail = prompt("Inserisci il tuo indirizzo email:");

for (let i = 0; i < emailArray.length; i++) {
    if (emailArray[i] == userEmail) {
        console.log(`L'indirizzo email ${userEmail} è presente nell'array.`);
        break;

    } else {
        console.log(`L'indirizzo email ${userEmail} non è presente nell'array.`);
    }
}