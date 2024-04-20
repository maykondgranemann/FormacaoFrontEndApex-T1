class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
var p1 = new Pessoa("Tadeu", "Jose");
var p2 = new Pessoa("Maria", "Souza");

var tabela = document.querySelector("table");
var tbody = tabela.children[1]
tbody.innerHTML = `
                    <tr>
                        <td>${p1.nome}</td>
                        <td>${p1.sobrenome}</td>
                    </tr>
                    <tr>
                        <td>${p2.nome}</td>
                        <td>${p2.sobrenome}</td>
                    </tr>` 
console.log()