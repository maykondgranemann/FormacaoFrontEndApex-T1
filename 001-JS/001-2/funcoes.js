// Funcoes, procedimento e métodos
console.log('========== Funções =========')

function mensagem1(){
    console.log('Funcao de mensagem 1');
    mensagem2();
}
function mensagem2(){
    console.log('Funcao de mensagem 2');
}
 function mensagem3(){
    return 'Olá'
 }
// funcao com parametro
function saudacao(nome){
    console.log(`Olá, ${nome} !`);
}
mensagem1();
console.log(mensagem3())

var n1 = 'Joelma';
saudacao(n1);
//CallStack ou Pilha de chamadas