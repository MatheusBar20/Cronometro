let segundos = 0;
let intervalo = null;

const tempo = document.getElementById("tempo");
const zerar = document.getElementById("zerar");
const iniciar = document.getElementById("iniciar");
const parar = document.getElementById("parar");

function atualizarTempo() {
    segundos++;
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    tempo.textContent =
        String(minutos).padStart(2, "0") +
        ":" +
        String(segundosRestantes).padStart(2, "0");
}

iniciar.addEventListener("click", function () {
    if (intervalo === null) {
        intervalo = setInterval(atualizarTempo, 1000);
    }
});

parar.addEventListener("click", function () {
    clearInterval(intervalo);
    intervalo = null;
});

zerar.addEventListener("click", function () {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    tempo.textContent = "00:00";
});