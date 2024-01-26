"use strict";
var casting;
(function (casting) {
    let estaChovendo = false;
    estaChovendo = true;
    let idade = 27;
    let number = 1.75;
    const nacionalidade = 'Brasileira';
    // Deve ser tipado o tipo de Array em casos como estes para que não ocorra como
    const colega = ['João', 'Maria', 'Jose', 41, true]; // e ser um array de ambos os tipos
    const colegas = ['João', 'Maria', 'Jose'];
    const tecnologias = ['HTML', 'CSS', 'JavaScript'];
    const notas = [1, 2, 3, 4, 5];
    tecnologias.push();
    //notas.push(); Não é possivel alterar o array pois é um array 
    //tuplas
    const lista = ['João', true, 41];
    // union types
    let idadevictor = 25;
    idadevictor = '25';
    // any tipo "qualquer coisa", recebe qualquer coisa ou retorna qualquer coisa
    // utilizar com cuidado, pois foge do conceiro do TypeScript, que é feito para tipas os dados
    let dadosapi;
    dadosapi = 'João';
    dadosapi = 25;
    dadosapi = true;
    dadosapi = [1, 2, 3];
})(casting || (casting = {}));
