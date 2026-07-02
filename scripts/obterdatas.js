const ano = document.querySelector("#anoatual");
ano.textContent = new Date().getFullYear();

const ultimaModificacao = document.querySelector("#ultimaModificacao");

const data = new Date(document.lastModified);

ultimaModificacao.textContent =
    `Última modificação: ${data.toLocaleDateString("pt-BR")} ${data.toLocaleTimeString("pt-BR")}`;