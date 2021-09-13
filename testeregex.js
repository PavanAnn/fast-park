//node testeregex.js

var re = "[A-Z][A-Z][A-Z][0-9][A-Z0-9][0-9][0-9]";
var capital_letters_array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var myArray = [];
var cont = 0;
while(cont < 20){
    var valor_gerado = Math.floor(Math.random() * 26)
    myArray.push(valor_gerado)
    cont++;
}

//var myArray = ['AAA8A88', 'A909090', 'aaa8a88', 'aAA8A88', '12AAAAA', 'AAA9A99AA', 'AAA8888'];
var validated = []
myArray.forEach(function(item){
    var value = item.match(re);

    if(value != null)
        validated.push(value);
})

console.log(validated)

    
