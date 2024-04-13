var lista_nomes = ["Maykon", "Matheus", "Elvis", "Douglas", "Johnny"]


for(var cont = 0; cont < lista_nomes.length; cont++){
    console.log(lista_nomes[cont]);
}

for(var nome of lista_nomes){ // em outras linguagens foreach
    console.log(nome);
}