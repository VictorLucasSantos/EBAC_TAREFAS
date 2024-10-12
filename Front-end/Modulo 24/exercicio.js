function Pessoa(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.falar = function(){
        console.log(`Olá sou ${this.nome} ${this.sobrenome} tenho ${this.idade} anos`)
    }
}

function Funcionario(nome, sobrenome, idade, cargo, salario){
    this.cargo = cargo
    let _salario = 0;
    Pessoa.call(this, nome, sobrenome, idade)

    this.getSalario = function(){
        return _salario
    }

    this.setSalario = function (salario){   
        if(salario > 0  &&  typeof valor1 === 'number') {
            _salario = salario;
        } 
    }

    this.trabalha = function(){
        console.log(`Olá sou ${this.nome} ${this.sobrenome} tenho ${this.idade} anos trabalho como ${this.cargo} e ganho ${this.salario}`)
    }
}

function Estagiario(nome, sobrenome, idade){
    Funcionario.call(this, nome, sobrenome, idade, "Estagiário", 2000)

    this.aumento = function(){
        const novosalario = salario * 1.07;
        this.setSalario(novosalario)
    }
}

function Gerente(nome, sobrenome, idade,){
    Funcionario.call(this, nome, sobrenome, idade, "Gerente", 10000)

    this.aumento = function(){
        const novosalario = salario * 1.15;
        this.setSalario(novosalario)
    }
}

const pessoa1 = new Pessoa('Victor', 'Santos', 25)
const funcionario1 = new Funcionario('Jheniffer', 'Karyne', 20,'Engenheira', 5000)
const funcionario2 = new Funcionario('Victor', 'Lucas', 22, 'Desenvolvedor', 5000)
const estagiario = new Estagiario('SeiLa', 'Da Silva', 19, 'Desenvolvedor', 5000)
const gerente = new Gerente('Beltrano', 'Ciclano', 21, 'Desenvolvedor', 5000)

console.log(pessoa1)
console.log(funcionario1)
console.log(funcionario2)
console.log(estagiario)
console.log(gerente)
