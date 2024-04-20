// Create Read Update Delete
var lista_produtos = [];

function create(nome, descricao, valor){
    let produto = new Produto(nome, descricao, valor);
    lista_produtos.push(produto);
}

function read(){
    return lista_produtos;
}