const read = require("readline-sync"); 
let salario = read.questionFloat("Digite o salário atual: "); 
console.log(`O salario será reajustado em: ${((salario*22)/100).toFixed(2)}`);