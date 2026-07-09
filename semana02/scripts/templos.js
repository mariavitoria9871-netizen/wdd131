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