// Chiedi all’utente il suo nome
var userName = prompt('Come ti chiami?');
console.log(userName);
document.getElementById('nome-utente').innerHTML=userName;
// poi chiedi il suo cognome
var userSurname = prompt('Qual è il tuo cognome?');
console.log(userSurname);
// poi chiedi il suo colore preferito
var userColor = prompt('Qual è il tuo colore preferito?');
console.log(userColor);
// Infine scrivi sulla pagina (html)
document.getElementById('psw-container').innerHTML=userName + userSurname + userColor + '19';
