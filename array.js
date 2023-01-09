let lista1 = [0,1,2,3,4, "Guro"]; //primeira forma
let lista2 = Array("Pedro,", "Tiago", "João", "no barquinho");
lista2[9] = "No mar da Galileia";
lista1.push("Lilo"); //adiciona um valor no final do array
lista1.pop(); //retira o último valor
lista1.unshift("ahahah"); //adiciona ao início do array
lista1.shift(); //retira o valor armazenado no incício do array
console.log(lista1);
console.log(lista2);
console.log(lista2.length); //tamanho total da lista 
console.log(lista1.indexOf("Lilo")); //busca informação dentro do array
if(lista1.indexOf("Guro") == -1){ //função adiciona elemento caso a busca retorne -1
lista1.push("LILO");
}else{
    lista1.push("Item já existente");
}
console.log(lista1);
lista2.splice(1,1);//retirada de um item a partir de uma posição (é viiirrrrgula)
console.log(lista2);
lista2.splice(1.1);//retirada tudo, deixando apenas o valor do índice (É UM PONTO .)
console.log(lista2);
let item = lista2.indexOf("João");
if(item != -1){
    lista2.splice(item,1); //referência "item" | remove 1
}else{
    lista2.push("Aaaaaah");
}
console.log(lista2);

