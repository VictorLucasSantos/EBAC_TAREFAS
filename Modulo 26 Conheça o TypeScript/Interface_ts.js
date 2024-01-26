"use strict";
class Conta {
    constructor(NumeroConta) {
        this.Saldo = 0;
        this.NumeroConta = NumeroConta;
    }
}
class ContaSalario extends Conta {
    depositar(Valor) {
        this.Saldo = +Valor;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.TaxaTransferencia = 0;
    }
    Transferir(valor, destinatario) {
        destinatario.Saldo = +(valor - this.TaxaTransferencia);
        return true;
    }
    ;
}
