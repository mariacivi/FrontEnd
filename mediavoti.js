var somma = 0;
var indice = 0;
do {
    var x = prompt("scrivi un voto o premi e per terminare: ");
    if (x != 'e' && x>=18 && x<=30 ) {
    var y = parseInt(x);
    somma += y;
    indice++;
    }
}
while (x != 'e')
var media = somma/ indice;
console.log("La media dei voti da te inserite è " + media);
if (media>=25 && indice>=4){
    console.log("borsa di studio convalidata")
}else(console.log("non puoi accedere alla borsa di studio"))