"use strict";
const alunos = [
    {
        nome: "Victor",
        cursos: ["Front-end", 'Python'],
        idade: 21
    },
    {
        nome: "Jheniffer",
        cursos: ['Administração'],
        idade: 18
    }
];
alunos.push({
    nome: "Julia",
    cursos: ["Arquitetuta"],
    idade: 29
});
function ExibeAluno(aluno) {
    console.log(aluno.nome);
}
