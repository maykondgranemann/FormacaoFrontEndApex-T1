create("Brahma", "Milho com agua", 4.99);
create("Corona", "Puro malte", 9.99);

var tbody = document.querySelector("table").children[1];

var produtos = read();
for (let prod of produtos) {
    tbody.innerHTML += `
        <tr>
            <td>${prod.nome}</td>
            <td>${prod.descricao}</td>
            <td>${prod.valor}</td>
        </tr>
    `    
}

