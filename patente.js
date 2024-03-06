var anno_attuale = 2024;

do {
    var anno = parseInt(prompt("Inserisci il tuo anno di nascita\n"));
    if (anno<1900 || anno>anno_attuale){
        console.log("Anno di nascita non consentito!");
    }
} while (anno<1900 || anno>anno_attuale)
do {
    var scadenza = parseInt(prompt("Inserisci l'anno di scadenza della patente\n"));
    if(scadenza>anno_attuale)
        console.log ("La tua patente non è ancora scaduta!");
    else if (scadenza <= 2000)
        console.log ("La patente è scaduta da troppo tempo!");
} while (scadenza<=2000 && scadenza>anno_attuale)

rinnovaPatente (anno, scadenza);