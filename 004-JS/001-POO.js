// POO - Programação Orientada a Objetos
class Pessoa {
    //metodos são funções dentro de uma classe
    //Construtor que é executado quando se cria a variavel desta class
    constructor(){
        console.log("passando pelo construtor");
        this.nome = "";
        this.sobrenome = "";
        this.idade = 0;
    }
    
}
var p1 = new Pessoa();
p1.nome = "Alex";
p1.sobrenome = "Silva";
p1.idade = 85;
console.log(p1);

var p2 = new Pessoa();
p2.nome = "Anna";
p2.sobrenome = "Bertioga";
console.log(p2);