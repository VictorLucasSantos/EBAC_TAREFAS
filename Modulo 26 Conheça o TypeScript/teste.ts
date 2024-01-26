namespace casting {
let estaChovendo : boolean = false

estaChovendo = true

let idade: number = 27

let number: number = 1.75

const nacionalidade : string = 'Brasileira'

// Deve ser tipado o tipo de Array em casos como estes para que não ocorra como
const colega = ['João', 'Maria', 'Jose', 41, true] // e ser um array de ambos os tipos
const colegas: string[] = ['João', 'Maria', 'Jose']
const tecnologias: Array<string> = ['HTML', 'CSS', 'JavaScript']
const notas: ReadonlyArray<number> = [1, 2, 3, 4, 5]

tecnologias.push();
//notas.push(); Não é possivel alterar o array pois é um array 

//tuplas
const lista: [nome: string, estaestudando:Boolean, idade: number] = ['João', true, 41]

// union types
let idadevictor: number | string = 25
idadevictor = '25'

// any tipo "qualquer coisa", recebe qualquer coisa ou retorna qualquer coisa
// utilizar com cuidado, pois foge do conceiro do TypeScript, que é feito para tipas os dados
let dadosapi: any
dadosapi = 'João'
dadosapi = 25
dadosapi = true
dadosapi = [1, 2, 3]
}