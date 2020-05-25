// // VARIABLES ABOUT LOG IN DETAIL
var logIn = prompt('Inserisci un indirizzo mail valido');
var eMail = ['wadewilson@deadpool.com','jessecuster066@preacher.com','solidsnake@mgs.us','walterwhite@blue.com','ripntear@untilitisdone.doom',];
var findIt = false;

for (var i = 0; i < eMail.length; i++) {
// EMAIL FOUND!
  if (logIn === eMail[i]) {
    findIt = true;
    document.getElementById('secretmail').innerHTML = ('Grazie per richiesto Uber-Star-Ship, una navetta arriverà alle sue coordinate entro 324 lune di Orione .')
  } else if (findIt == false)  {
    document.getElementById('secretmail').innerHTML = ('Salve cittadino del pianeta terra, sembra tu ti sia ritrovato dove non dovresti essere. Chiudi questo sito e dimentica tutto. ')
  }
}
