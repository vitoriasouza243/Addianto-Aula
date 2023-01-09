/**
 * Executa o bloco ao menos 1 vez, pois a verificação da condição acontece ao final do bloco.
    Do{
        //comando 
    }while(condição);

*/ 
/*Incremento
let test = 10;
    do{
        console.log("Não tenho ideia"); Esse código vai repetir infinitamente, pois não possui incremente/decremento
        test = test + 1; *Primeira forma -> incremento de 1
        test++; *Segunda forma -> Notação semelhante ao C
        test+= 1; *Terceira forma -> maneira simplificada, incremento de soma + 1
        
    }while(test < 10);*/
//Decremento
/*let test = -10;
do{
    console.log("Ainda não faço ideia, só que negativo."); //só vai executar a vez obrigatória
    test = test -1;
    //test--;
    //test-= 1;

}while(test > 0);*/

let test = 10;
do{
    console.log("Bobolhando");
    console.log(test);
    if( test == 7){
        //break; *para no 7
        continue; //loop de novo
    }
    test -= 1;
}while(test > 0);
console.log("Do lado de fora.");