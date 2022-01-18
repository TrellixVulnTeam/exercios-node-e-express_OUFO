function Carro(velocidadeMaxmima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelarar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxmima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxmima
        }
    }
    //metdo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}
const uno = new Carro
uno.acelarar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 10)

ferrari.acelarar()
ferrari.acelarar()
ferrari.acelarar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro);
console.log(typeof ferrari);