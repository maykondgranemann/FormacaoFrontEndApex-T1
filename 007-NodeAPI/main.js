console.log("Utilizando Express...");

// cadastrar
    // deve receber dois parametros: nome, sobrenome
    // retornar uma string com a mensagem "Dados cadastrados com sucesso!"
var cadastrar = function(nome, sobrenome){
    let pessoa = {'nome': nome, 'sobrenome': sobrenome};
    let mensagem = "Dados cadastrados com sucesso";
    return mensagem;
}
// listar
    // nao recebe nenhum parâmetro
    // retorna uma lista de duas pessoas com nome e sobrenome
var listar = function(){
    let pessoa1 = {'nome': 'Joao', 'sobrenome': 'Silva'}; // dicionario
    let pessoa2 = {'nome': 'Júlia', 'sobrenome': 'Gomes'};
    let pessoas = [pessoa1, pessoa2];
    return pessoas;
}  
// alterar
    // deve receber dois parametros: nome, sobrenome
    // retornar uma string com a mensagem "Dados alterados com sucesso!"
var alterar = function(nome, sobrenome){
    return "Dados alterados com sucesso!"
}
// deletar
    // deve receber dois parametros: nome, sobrenome
    // retornar uma string com a mensagem "Dados deletados com sucesso!"
var deletar = function(nome, sobrenome){
    return "Dados deletados com sucesso";
}

console.log( cadastrar('a', 'a') );
console.log( listar() );
console.log( alterar('a', 'a') );
console.log( deletar('a', 'a') );