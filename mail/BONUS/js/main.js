
const domButton = document.querySelector('#btn1');

domButton.addEventListener('click',
    function () {
        const ticket = document.getElementById('ticket');
        const userEmail = prompt("Inserisci il tuo indirizzo email:");
        const emailArray = ['tizio@gmail.com', 'caio@hotmail.com', 'sempronio@yahoo.com'];

        let checkMail = false;


        for (let i = 0; i < emailArray.length; i++) {
            if (emailArray[i] == userEmail) {
                checkMail = true;
            }
        }

        if (checkMail) {
            console.log(`L'indirizzo email ${userEmail} è presente nell'array.`);
        } else if (checkMail = false) {
            console.log(`L'indirizzo email ${userEmail} non è presente nell'array.`);
        } else {
            console.log(`Per favore inserisci un indirizzo email valido`);
        }


    }
);
