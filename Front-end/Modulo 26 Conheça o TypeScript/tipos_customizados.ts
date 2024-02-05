// tipo customizados
type aluno = {
    nome: string;
    cursos?: string[]; // Adicionar "?" para situações onde pode ser opcional o parametro informado em tipos
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: "Victor",
        cursos: ["Front-end", 'Python'],
        idade: 21
    },
    {
        nome:"Jheniffer",
        cursos: ['Administração'],
        idade: 18
    }
]

alunos.push({
    nome: "Julia",
    cursos: ["Arquitetuta"],
    idade: 29
})

function ExibeAluno(aluno: aluno){
    console.log(aluno.nome)
}