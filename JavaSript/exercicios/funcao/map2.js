const carrinho = [
    '{"nome":"Borraha","preco":3.45}',
    '{"nome":"Caderno","preco":3.45}',
    '{"nome":"Kit de Lapis","preco":3.45}',
    '{"nome":"Caneta","preco":3.45}',
  
]

const paraObjeto = json =>JSON.parse(json)
const apenasPreco = produto => produto.preco 
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado);