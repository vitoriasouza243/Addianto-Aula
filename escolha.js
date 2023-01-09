const read = require("readline-sync");
let test = read.questionInt("Digita um number.")
switch(test){ //case: Valores possíveis para a variável, trabalha sempre com valor fixo e igualdade.
    case 18:
        console.log("Você tem 18 aninhos, que fofo. :3");
    break; //ele faz com que o código para aqui.
    case 17:
        console.log("Você tem menos que 18, dá o fora daqui bebezão. -_-")
    break; 
    default:
        console.log("O curioso case do boi invertebrado.")
}