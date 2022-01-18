Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; ++i) {
        if (callback(this[1], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}
const proutos = [
    { nome: 'Notebook', preco: 2399, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 24, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.85, fragil: false }
]

console.log(proutos.filter2(function (p) {
    return p.fragil == true
}));

const caro = proutos => proutos.preco >= 500
const fragil = proutos => proutos.fragil

console.log(proutos.filter2(caro).filter2(fragil));