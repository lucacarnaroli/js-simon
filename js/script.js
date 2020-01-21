// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


setTimeout(bannerNum, 2000);
var banner = alert('1 32 45 6 8 9 10');
var array = [];
function bannerNum() {
  for (var i = 0; i < 5; i++) {
    var putNum = prompt('Inserisci un numero alla volta');
    if (putNum == banner) {
      array.push(putNum);
    }
  }
}
clearTimeout(bannerNum);
console.log(array);
