"use strict";
// Forma da escrita da função padrão
function CalculaArea(base, altura) {
    return base * altura;
}
// resumo de como escrever uma função inline
const CalculaArea2 = (base, altura) => base * altura;
function somar(...numeros) {
    //numeros.reduce()
    console.log(numeros);
}
// quando uma função não contém retorno explicito como o exemplo abaixo, deve ser adicionado VOID como retorno, que significa que não tem retorno
function soma(...numeros) {
    //numeros.reduce()
    console.log(numeros);
}
function teste() {
    if (10 > 5) {
        return 'Dez é maior que 5';
    }
    else {
        return 10;
    }
}
const resumoteste = teste();
