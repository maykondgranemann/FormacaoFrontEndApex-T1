var h1 = document.getElementById("titulo");
console.log(h1);
console.log(h1.innerHTML)
h1.innerHTML = "Novo titulo";

var body = document.querySelector("body");
body.innerHTML +=  "<a href=''>Meu link com JS</a>";

var divConteudo = document.getElementsByClassName("conteudo");
console.log(divConteudo[0]);