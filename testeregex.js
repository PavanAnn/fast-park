//node testeregex.js

var re = "[A-Z][A-Z][A-Z][0-9][A-Z0-9][0-9][0-9]";
var capital_letters_array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var myArray = [];
var cont = 0;
while(cont < 20){
    var placa = "";
    
    for (i = 0; i < 3; i++){
        var valor_gerado = Math.floor(Math.random() * 26)
        placa += capital_letters_array[valor_gerado];
    }

    for (i = 0; i < 4; i++) {
        var valor_gerado = Math.floor(Math.random() * 9)
        placa += valor_gerado.toString();
    }
    
    myArray.push(placa)
    cont++;
}
console.log(myArray);
//var myArray = ['AAA8A88', 'A909090', 'aaa8a88', 'aAA8A88', '12AAAAA', 'AAA9A99AA', 'AAA8888'];
var validated = []
myArray.forEach(function(item){
    var value = item.toString().match(re);

    if(value != null)
        validated.push(value);
})

console.log(validated)

    
