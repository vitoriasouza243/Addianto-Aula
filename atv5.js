const read = require("readline-sync");
let sex = read.question("Digite o seu sexo: ");
let altura = read.questionFloat("Digite sua altura em metros: ");
/*if(sex == "m"){
    pideal = (72.7*altura)-58;
    console.log(`O seu peso ideal é: ${(pideal).toFixed(2)}`);
}if(sex = "f"){
    pideal = (62.1*altura)-44.7;
    console.log(`O peso ideial para você é: ${(pideal).toFixed(2)}`);
}*/

if(sex == "m"){
    pideal = (72.7*altura)-58;
    console.log(`O seu peso ideal é: ${(pideal).toFixed(2)}`);
}else{
    pideal = (62.1*altura)-44.7;
    console.log(`O peso ideial para você é: ${(pideal).toFixed(2)}`);
}

