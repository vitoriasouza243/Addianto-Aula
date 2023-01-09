/*5 - Uma revendedora de carros usados paga a seus funcionários vendedores um
salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais
3% do valor das vendas por ele efetuadas.

Escrever um algoritmo que leia o número de
carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele
recebe por carro vendido. Calcule e escreva o salário final do vendedor
 */
const read = require("readline-sync");
let cvendido = read.question("Total de carros vendidos: ");
let vtotalvendas = read.questionFloat("Valor total de vendas: ");
let salario = read.questionFloat("Salario fixo: ");
let comissao = read.questionFloat("Comissão: ");
let vcomissao = (comissao*cvendido);
let porcentualvendas = (vtotalvendas*3)/100;
console.log(`O salário final é: ${(salario+vcomissao+porcentualvendas)}`);

