// VARIABLES ABOUT LOG IN DETAIL
var logIn = prompt('inserisci lo stesso indirizzo email usato in fase di registrazione');
var eMail = ['wadewilson@deadpool.com','jessecuster066@preacher.com', 'solidsnake@mgs.us', 'walterwhite@blue.com' , 'ripntear@untilitisdone.doom'];
// TO CHECK VARIABLE
var trovato = false;
// EMAIL IN OUR DATABASE?
for (var i = 0; i < eMail.length; i++) {
  var mail = eMail[i];
  if (logIn == mail) {
    trovato = true; // MAIL FOUND! YOU CAN JOIN
    alert('Accesso confermato, bentornato!')
  }
  else if (logIn !== mail)
    trovato = false; // ACCESS DENIED! MAIL DON'T FOUND
    alert('Accesso negato! Allontarnarsi subito dalla linea gialla!')
}
