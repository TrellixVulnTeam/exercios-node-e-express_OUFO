const _ = require('lodash')

const alunos = [{
    nome:'João',
    nota:7.4
},{
    nome: 'Maria',
    nota:8.6
},{
    nome:'Pedro',
    nota:10
}]

const media = _.sumBy(alunos, 'nota')/alunos.length
console.log(parseInt(media))