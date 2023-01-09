const read = require("readline-sync");
let n1 = read.questionFloat("Digite a primiera nota: ");
let n2 = read.questionFloat("Digite a segunda nota: ");
let n3 = read.questionFloat("Ditige a terceira nota: ");
let n4 = read.questionFloat("Digite a quarta nota: ");
let nf = (n1*2 + n2*3 + n3*4 + n4*7)/16;
console.log(`A nota final é: ${nf.toFixed(2)}`);
if(nf >= 6.0 && n4 > 6){ //A nota 4 não podendo ser menor que 6. && -> Comparativo E.
    console.log("Aluno aprovado.");
}else{
    console.log("Aluno reprovado.");
}