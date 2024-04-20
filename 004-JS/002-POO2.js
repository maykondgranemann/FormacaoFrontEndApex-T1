class Produto{
    constructor(nome, descricao, valor){
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
    }
    // Getter
    getValor(){
        return `R$ ${this.valor}`;
    }
}

var produto1 = new Produto("Café Soluvel", "Ruim", 18.99);

console.log(produto1.getValor());
