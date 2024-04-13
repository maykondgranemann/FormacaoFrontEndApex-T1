// criacao de um array
var nomes = [];
var cidades = new Array();
var cursos = ["Python", "C#", "Java", "Front", "NodeJs"];

console.log(nomes);
console.log(cidades);
console.log(cursos);

// adicionando elementos no array
nomes.push("Anna","Beatriz");
console.log(nomes);

// exibir elemento especifico (index)
console.log(cursos[1]);

// alterar um elemento do array
nomes[0] = "Ana"; 
console.log(nomes);

//remover elementos
console.log(cursos);
// remove o ultimo elemento
cursos.pop();
console.log(cursos);
// remove o primeiro elemento
cursos.shift();
console.log(cursos);
// remove do meio da lista da posicao inicial ate a final
cursos.splice(1,1);
console.log(cursos);

var numeros = [5,8,2,10,18,15,12,17,3,1];
// ordenacao de array
console.log(numeros.sort());
cursos = ["Python", "C#", "Java", "Front", "NodeJs"];
console.log(cursos.sort())