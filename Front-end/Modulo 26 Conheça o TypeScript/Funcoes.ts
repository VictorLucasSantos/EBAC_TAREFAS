// Forma da escrita da função padrão
function CalculaArea(base:number, altura:number){
    return base * altura
}

// resumo de como escrever uma função inline
const CalculaArea2 = (base : number, altura: number) : number => base * altura 

function somar(...numeros: number[]){
    //numeros.reduce()
    console.log(numeros)
}

// quando uma função não contém retorno explicito como o exemplo abaixo, deve ser adicionado VOID como retorno, que significa que não tem retorno
function soma(...numeros: number[]): void{
    //numeros.reduce()
    console.log(numeros)
}

function teste(): string | number {
    if (10 > 5) {
        return 'Dez é maior que 5'
    } else {
         return 10
    }
}

const resumoteste = teste()