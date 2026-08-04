const formulario = document.getElementById("formContato");
const resultado = document.getElementById("resultado");

const modelos = ["FZ15", "FZ25", "MT-03", "Lander 250"];

if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const modelo = document.getElementById("modelo").value;
        const mensagem = document.getElementById("mensagem").value;

        const cliente = {
            nome,
            email,
            modelo,
            mensagem
        };

        localStorage.setItem("clienteYamaha", JSON.stringify(cliente));

        if (modelos.includes(modelo)) {
            resultado.innerHTML = `
            Obrigado, <strong>${cliente.nome}</strong>!<br>
            Recebemos seu interesse na <strong>${cliente.modelo}</strong>.<br>
            Entraremos em contato pelo e-mail <strong>${cliente.email}</strong>.
        `;
        } else {
            resultado.textContent = "Selecione um modelo válido.";
        }

        formulario.reset();
    });
}

const btnMensagem = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

if (btnMensagem && mensagem) {
    btnMensagem.addEventListener("click", function () {
        mensagem.innerHTML = "Conheça nossos modelos na página <strong>Modelos</strong>!";
        window.location.href = "modelos.html";
    });
}