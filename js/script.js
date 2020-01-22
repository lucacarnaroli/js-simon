// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

var numEstratto = numRandom(1,100);
var arrayBanner = [];
var arrayUtente = [];
console.log(arrayBanner);

for (var i = 0; i < 5; i++) {
  arrayBanner.push(numRandom(1,100));
}
alert(arrayBanner);

setTimeout(bannerNum, 2000);

function bannerNum() {
  for (var i = 0; i < 5; i++) {
    var putNum = parseInt(prompt('Inserisci un numero alla volta, rispetto a quelli precedenti'));
    if (arrayBanner.includes(putNum)) {
      arrayUtente.push(putNum);
    }
  }
  console.log('Numeri presi: ' + arrayUtente.length + ' ' + 'Numeri indovinati: ' + ' ' + arrayUtente);
  alert('Numeri presi: ' + arrayUtente.length + ' ' + 'Numeri indovinati: ' + ' ' + arrayUtente);
}


// FUNZIONI
function numRandom(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()* (max - min + 1) ) + min;
}
