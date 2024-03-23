// Operadores matematicos

console.log('Operadores:');
var numero1 = 5;
var numero2 = 2;

var soma = numero1 + numero2;
console.log('A soma de ' + numero1 + ' e ' + numero2 +  ' é :' + soma); // concatenacao tradicional

var subtracao = numero1 - numero2;
console.log(`A subtração entre ${numero1} e ${numero2} é: ${subtracao}`); // interpolacao de strings

var multiplicacao = numero1 * numero2;
console.log(`A multiplicação entre ${numero1} e ${numero2} é: ${multiplicacao}`);

var divisao = numero1 / numero2;
console.log(`A divisão entre ${numero1} e ${numero2} é: ${divisao}`);

var resto = numero1 % numero2;
console.log(`o resto da divisão entre ${numero1} e ${numero2} é: ${resto}`);

console.log(`Um incremento de ${numero1} é: ${++numero1}`);

console.log(`Um decremento de ${numero2} é: ${--numero2}`);