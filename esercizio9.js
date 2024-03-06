var valoriNumerici = new Array ();

do { 
    var numero = prompt("Scrivi un numero e premi e per terminare");
    if (numero!= "e"){
        valoriNumerici.push(numero); 
    }
   
}
    while (numero != "e");
    
    var somma=0;
    for (indice in valoriNumerici) {
        somma=somma+parseInt(valoriNumerici[indice]);
    
    }

    console.log(somma);