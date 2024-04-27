console.log("Mensagem em node");

var soma = require('./soma.js');

console.log(soma(10,18));

//EX1 - criar um modulo de subtracao(subtracao.js) e executar no arquivo exec.js 
var subtracao = require('./subtracao.js');
console.log( subtracao(10, 89) );

//para executar, digitar no terminal: node exec.js
