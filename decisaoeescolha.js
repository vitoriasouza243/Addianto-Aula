const read = require("readline-sync");
console.log("Este artigo pode conter conteúdo explicito para a faixa etária.")
let teste = read.questionInt("Por favor digite a sua idade: ");

if(teste >= 18){
    if(teste < 16){
    }else{
        console.log("Bem-vindo!")
    }
}else if(teste <= 10){
    console.log("Você é só um bebezinho caga fralda. -u-");
    
}else{
    console.log("Cai fora.");
}