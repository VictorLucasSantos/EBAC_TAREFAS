function Pessoa(nome){
    this.nome = nome;
    this.dizOi = function(){
        console.log(`${this.nome} diz oi`)
    }
}

// function Funcionario(nome, cargo, salario){
//     this.nome = nome;
//     this.cargo = cargo;
//     this.salario = salario;
// }

function Funcionario(nome, cargo, salario){
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = 0;
// herdando a classe pessoa
    Pessoa.call(this, nome);

    this.getSalario = function(){
        return _salario
    }

    this.aumento = function(){
        const novosalario = salario * 1.1
        _salario = novosalario;
    }

    this.setSalario = function (salario){   
        if(salario > 0  &&  typeof valor1 === 'number') {
            _salario = salario;
        } 
    }
}

function Estagiario(nome){
    Funcionario.call(this, nome, "Estagiário", 2000)

    this.aumento = function(){
        const novosalario = salario * 1.07;
        this.setSalario(novosalario)
    }
}

function Gerente(nome){
    Funcionario.call(this, nome, "Gerente", 10000)

    this.aumento = function(){
        const novosalario = salario * 1.15;
        this.setSalario(novosalario)
    }
}

const pessoa1 = new Pessoa('Victor')
const funcionario1 = new Funcionario('Jheniffer', 'Engenheiro', 5000)
const funcionario2 = new Funcionario('Victor', 'Desenvolvedor', 5000)
const estagiario = new Estagiario('SeiLa', 'Desenvolvedor', 5000)
const gerente = new Gerente('Beltrano', 'Desenvolvedor', 5000)
// pessoa1.dizOi()
// funcionario1.dizOi()

console.log(pessoa1)
console.log(funcionario1)

console.log(funcionario1.getSalario())
funcionario1.setSalario(2000)
console.log(funcionario1.getSalario())

console.log(funcionario1.getSalario())
funcionario2.setSalario(2000)
funcionario2.aumento();
console.log(funcionario1.getSalario())