let lista = Array("Pedro","Tiago","João");
//for(let i = 0 ; i <lista.length; i++);{ //Forma clássica
// console.log(lista[i]);
//}
lista.forEach(function(item, indice, array){ //função de JS
    console.log(item);
});