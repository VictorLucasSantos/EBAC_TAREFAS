// objeto
const carroTeste = {
    modelo:'Fiesta',
    marca:'Ford',
    cor:'Azul',
    AnoFabricacao:2020,
//   função
    acelerar(){
        console.log('Acelerando...');
    }
}

// objeto
const carroTeste1 = {
    modelo:'Ka',
    marca:'Ford',
    cor:'Azul',
    AnoFabricacao:2021,
//   função
    acelerar(){
        console.log('Acelerando...');
    }
}

// Criação de objeto
function Carro(modelo, fabricante, AnoFabricacao, cor){
    this.modelo = modelo
    this.fabricante = fabricante
    this.AnoFabricacao = AnoFabricacao
    this.cor = cor
    this.acelerar = function(){
        console.log('Acelerando...')
    }
}

// Exemplo de uso da criação da classe carro
const carroTeste2 = new Carro('Fiesta', 'Ford', 2020, 'Azul')
const carroTeste3 =  Carro('Fiesta', 'Ford', 2020, 'Azul')

// console.log(carroTeste2)
// console.log(carroTeste3)

const nome = "Victor"
const idade = 25
const maiorDeIdade = true
const conhecimentos = ["HTML", "CSS", "Javascript"]

const pessoa = {
    nome : nome,
    idade : idade,
    maiorDeIdade : maiorDeIdade,
    conhecimentos : conhecimentos
}

function exibeAtributo(NomeAtributo){
    console.log(pessoa[NomeAtributo])
}

exibeAtributo('nome');

pessoa.sobrenome = 'Santos';

//Congela a classe e o código a baixo não se aplica a ela 
Object.freeze(pessoa);

pessoa.sobrenome = 'Vitor';
// se não for nulo ou undefined
if (pessoa['sobrenome']){
    console.log('Pessoa tem sobrenome')
}

function ExisteAtributo(Atributo){
    if (Atributo in pessoa){
        console.log('Pessoa tem o atributo' + Atributo)
    }
}

// Mostra as propriedades do objeto
console.log(Object.keys(pessoa))

console.log(Object.keys(pessoa).length)

console.log(Object.values(pessoa))