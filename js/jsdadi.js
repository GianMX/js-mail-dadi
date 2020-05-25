// RANDOM NUMBER GENERATOR PLAYER 1
var gon = Math.floor(Math.random() * 6) + 1;
alert (" Gon attacca con "+ gon)
// RANDOM NUMBER GENERATOR PLAYER 2
var pitou = Math.floor(Math.random() * 6) + 1;
alert (" Pitou risponde con "+ pitou )
// CHECK VICTORY
// RESULT IMG VAR RULES
var win = document.getElementById('victory');
var los = document.getElementById('loose');
// 
if (gon > pitou ) {
  alert( gon + " è maggiore di " + pitou +  " Gon vince!! Kite è stato vendicato! ");
  win.classList.remove('invisible');
  win.classList.add('seeable');
} else if ( gon < pitou){
  alert( pitou +  " è maggiore di " + gon +  " Pitou vince!! Nessuno vendicherà Kite! ");
  los.classList.remove('invisible');
  los.classList.add('seeable');
} else {
  alert (" PAREGGIO !! Prepararsi al prossimo scontro ")
}
