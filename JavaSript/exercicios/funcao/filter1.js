const proutos = [
    { nome: 'Notebook', preco: 2399, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 24, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.85, fragil: false }
]

console.log(proutos.filter(function (p) {
    return p.fragil == true
}));

const caro = proutos => proutos.preco >= 500
const fragil = proutos => proutos.fragil

console.log(proutos.filter(caro).filter(fragil));