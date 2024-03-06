var temperature = Array();
var tot_temp = 0; //la somma di tutte le temperature inserite


for (var i=1; i<=7; i++){
    var temp_ins = parseInt(prompt("Inserisci la temperatura " + i + "\n"));

    temperature.push(temp_ins);
    tot_temp = tot_temp + temperature [i-1];
}

console.log (tot_temp);

var media = tot_temp / temperature.length;
console.log ("La temperatura media è " + media);

for (var i=0; i<temperature.length; i++){
    if (temperature[i] > media)
        console.log(temperature[i ] + " è superiore alla media");
    else if (temperature [i] < media)
        console.log(temperature[i ] + " è inferiore alla media");
    else
        console.log(temperature[i ] + " è uguale alla media");
}