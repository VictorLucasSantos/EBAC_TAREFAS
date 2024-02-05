class Conta{
    NumeroConta:Number;
    Saldo: Number = 0;
    constructor(NumeroConta: number){
        this.NumeroConta = NumeroConta;
    }
}

class ContaSalario extends Conta{
    depositar(Valor: number){
        this.Saldo =+ Valor
    }
}

// Interface para herdar, onde é obrigatório que seja implementado os métodos da interface, são como as caracteristicar inegáveis de algo
// Não deve ser informado como será executado o código da função expecificada, somente uma abreviação em função simplicifaca como abaixo
// Podemos implementar varias interfaces em uma classe, esse é o principal atributo de uso das interfaces
interface ITransacional {
    Transferir: (valor: number, destinatario: Conta) => boolean;
    TaxaTransferencia: number;
}

interface IExemplo{
    cnpj:string
}

interface IExemplo2{
    telefone:number
}

interface IExemplo3 extends IExemplo{

}

class ContaCorrente extends Conta implements ITransacional, IExemplo{
    cnpj: string;
    Transferir(valor: number, destinatario: Conta) {
        destinatario.Saldo =+ (valor - this.TaxaTransferencia);
        return true;
    };
    TaxaTransferencia: number = 0 ;
    
}