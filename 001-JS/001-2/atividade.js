// Atividades aula 1 e 2
console.log('============ Atividades ==============');
// SOMA
function soma(n1, n2){
    var resultado = n1 + n2;
    return resultado;
}
// Subtracao
function subtracao(n1, n2){
    var result = n1 - n2;
    return result;
}
// Multiplicacao
function multiplicacao(n1, n2){
    var res = n1 * n2;
    return res;
}
// Divisao
function divisao(n1, n2){
    return n1 / n2;
}

// chamando as funcoes acima, realize uma chamada para calcular a seguinte expressao:
// 5 + 10 +  ( (20*10*5) / 2) 
// deve ser realizado em uma unica empressao de console.log()
s1 = soma(5, 10)
m1 = multiplicacao(20,10)
m2 =  multiplicacao( m1, 5)
dv = divisao(m2, 2)
s2 = s1 + dv
console.log(soma( soma(5, 10) , divisao( multiplicacao( multiplicacao(20,10) ,5), 2 ) ) );