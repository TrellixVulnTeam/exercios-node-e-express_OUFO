const alunos = [
    { nome: 'Joao', nota: 7.4, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: true },
    { nome: 'Ana Maria', nota: 9.7, bolsista: false }
]

const todosBolsistas = (resultado, bolsista)=> resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas));

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))