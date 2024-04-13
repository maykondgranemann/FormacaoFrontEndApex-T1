var csv = "Elvis;Dickmann;29";

// fatia/quebra uma string baseado em um caracter
var dados = csv.split(";")
console.log(dados)

console.log( "Blumenau".startsWith('B') );
console.log( "Indaial".endsWith('al') );

console.log( "apex".toUpperCase() );
console.log( "CASAN".toLowerCase() );

console.log( "Blumenau/SC".replace('SC','Santa Catarina') ); 

var nome = "Maria";
var idade = 18;

console.log("A aluna " + nome + " tem " + idade + " anos");
// template string
console.log(`A aluna ${nome} tem ${idade} anos`);