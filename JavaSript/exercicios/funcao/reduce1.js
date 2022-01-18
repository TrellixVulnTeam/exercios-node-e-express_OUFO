const alunos = [
    { nome: 'Joao', nota: 7.4, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: false },
]
console.log(alunos.map(a=>a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
},0)

console.log(resultado);