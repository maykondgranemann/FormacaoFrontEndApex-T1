class Pessoa {
    //getters e setter -- encapsulamento
    setNome(nome){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }
    setSobrenome(sobrenome){
        this.sobrenome = sobrenome;
    }
    getSobrenome(){
        return this.sobrenome;
    }
}

var p1 = new Pessoa();
p1.setNome("João");
p1.setSobrenome("Souza");
console.log(p1);