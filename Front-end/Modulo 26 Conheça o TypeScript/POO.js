"use strict";
// Programação orientada a objetos em TypeScript
// public (Calçada): Aberto a todos, como a calçada. Em programação, public é acessível por qualquer classe.
// static (Ferramentas Comuns): Como ferramentas usadas por todos na casa. Em programação, static pertence à classe, não a instâncias.
// protected (Sala de Estar Familiar): Acesso para a família, como uma sala privada. Em programação, protected é aberto para a classe e subclasses.
// private (Quarto Particular): Acesso só pelo dono, como um quarto trancado. Em programação, private é restrito à própria classe.
// Esses termos definem o acesso em programação, como áreas em uma casa
//                   SENDO ASSIM POSSIVEL ADICIONAR ESSAS PALAVRAS RESERVADAS ACIMA EM FUNÇÕES OU EM PROPRIEDADES PARA EMCAPSULAR OS DADOS DE UMA CLASSE
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    DizOla() {
        return `${this.nome} disse oi`; // ``Para utilizar o recurso para adicionar variaveis em uma string em TypeScript
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        this.Saldo = 0;
        this.NumeroConta = numeroDaConta;
    }
    GetSaldo() {
        return this.Saldo;
    }
    Depositar(valor) {
        this.Saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    Depositar(valor) {
        this.Saldo = +valor;
    }
}
const ContaVictor = new ContaBancariaPessoaFisica(123456); // Instanciando uma classe 
ContaVictor.GetSaldo;
