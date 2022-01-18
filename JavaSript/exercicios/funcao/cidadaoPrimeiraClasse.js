

//Criar de forma literal
function fun1() {

}

//Armazenar função em variavel
const fun2 = function () {

}

//Armazenar funçao em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](3, 3))

//Armazenar em atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar funcao como param
function run(fun) {
    fun()
}

run(function () { console.log('executando...') })

//Uma funcao pode conter outra funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(1)