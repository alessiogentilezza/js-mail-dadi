
const domButton = document.querySelector('#btn1');

domButton.addEventListener('click',
    function () {
        const ticket = document.getElementById('ticket');
        const emailArray = ['tizio@gmail.com', 'caio@hotmail.com', 'sempronio@yahoo.com'];
        const userEmail = document.getElementById('email');
        const userEmailCompilato = userEmail.value;

        let checkMail = false;


        for (let i = 0; i < emailArray.length; i++) {
            if (emailArray[i] == userEmailCompilato) {
                checkMail = true;
            }
        }

        let checkMailText = document.getElementById('checkMailText')

        if (checkMail) {
            checkMailText.innerHTML = (`L'indirizzo email ${userEmailCompilato} è presente nell'array.`);
            console.log(`L'indirizzo email ${userEmailCompilato} è presente nell'array.`);
        } else {
            checkMailText.innerHTML = (`L'indirizzo email ${userEmailCompilato} non è presente nell'array.`);
            console.log(`L'indirizzo email ${userEmailCompilato} non è presente nell'array.`);
        }

    }
);