const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});

// Ano atual
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Data da última modificação
document.querySelector("#lastModified").textContent =
    "Última modificação: " + document.lastModified;

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Adicione mais objetos de templos aqui...
];


const galeria = document.querySelector(".galeria");

function criarCartoes(listaTemplos) {
    galeria.innerHTML = "";

    listaTemplos.forEach(templo => {
        const card = document.createElement("section");
        const nome = document.createElement("h3");
        const local = document.createElement("p");
        const dedicado = document.createElement("p");
        const tamanho = document.createElement("p");
        const imagem = document.createElement("img");

        nome.textContent = templo.nomeDoTemplo;
        local.innerHTML = `<strong>Localização:</strong> ${templo.localizacao}`;
        dedicado.innerHTML = `<strong>Dedicado:</strong> ${templo.consagracao}`;
        tamanho.innerHTML = `<strong>Tamanho:</strong> ${templo.area} sq ft`;

        imagem.src = templo.urlDaImagem;
        imagem.alt = templo.nomeDoTemplo;
        imagem.loading = "lazy";

        card.appendChild(nome);
        card.appendChild(local);
        card.appendChild(dedicado);
        card.appendChild(tamanho);
        card.appendChild(imagem);

        galeria.appendChild(card);
    });
}

criarCartoes(templos);

const links = document.querySelectorAll(".navigation a");

links[0].addEventListener("click", (e) => {
    e.preventDefault();
    criarCartoes(templos);
});

links[1].addEventListener("click", (e) => {
    e.preventDefault();
    criarCartoes(templos.filter(templo => templo.consagracao.includes("18")));
});

links[2].addEventListener("click", (e) => {
    e.preventDefault();
    criarCartoes(templos.filter(templo => templo.consagracao.includes("20")));
});

links[3].addEventListener("click", (e) => {
    e.preventDefault();
    criarCartoes(templos.filter(templo => templo.area > 90000));
});

links[4].addEventListener("click", (e) => {
    e.preventDefault();
    criarCartoes(templos.filter(templo => templo.area < 10000));
});