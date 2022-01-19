//operador ... rest(juntar)/spread(espalhar)


//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1430.70 }
const clone = { ativo: true, ...funcionario }

console.log(clone)

//usar spread com array
const groupA = ['João','Pedro','Maria']
const groupFinal = ['Maria', ...groupA, 'Rafaela']
console.log(groupFinal)