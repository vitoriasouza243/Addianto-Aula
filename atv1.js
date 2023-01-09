const read = require("readline-sync"); 
let base = read.question("Digite a base: "); 
let altura = Number.parseFloat(read.question("Digite a altura: "));
console.log(`O valor da base é: ${((base*altura)/2).toFixed(2)}`);