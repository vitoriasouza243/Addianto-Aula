const read = require("readline-sync");
let sex = read.question("Digite o seu sexo: M para 'Masculino' e F para 'Feminino': ");
let altura = read.questionFloat("Digite sua altura em metros: ");
if(sex == "M"){
    pesoIdeal = (72.7*altura)-58;
}else{
    pesoIdeal = (62.1*altura)-44.7;
}
console.log(`O seu peso ideal seria ${(pesoIdeal).toFixed(2)}`);
