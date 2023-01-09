/*4 - O custo de um carro novo ao consumidor é a soma do custo de fábrica com a
porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
Supondo que o percentual do distribuidor seja de 15% e os impostos de 30%, escrever
um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final
ao consumidor*/

const read = require("readline-sync"); 
let vfabrica = read.questionFloat("Insira o custo de fabrica dd carro: ");
let vdistri = vfabrica+((vfabrica*15)/100);
let vimposto = vfabrica+((vfabrica*30)/100);
let vcarro =  vfabrica + vdistri + vimposto;
console.log(`O valoe do carro é: ${(vcarro).toFixed(2)}.`);