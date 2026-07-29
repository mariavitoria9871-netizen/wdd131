let contador = Number(localStorage.getItem("contador")) || 0;

contador++;

localStorage.setItem("contador", contador);

document.getElementById("contador").textContent = contador;