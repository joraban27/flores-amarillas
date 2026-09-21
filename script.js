function mostrarSorpresa() {

    const sorpresa = document.getElementById("sorpresa");

    sorpresa.style.display = "block";

    const musica = document.getElementById("musica");
    musica.play();

    crearFlores();

}
/*
function crearFlores() {

    const cantidad = 25;

    for (let i = 0; i < cantidad; i++) {

        const flor = document.createElement("div");

        flor.innerHTML = "🌻";

        flor.style.position = "fixed";
        flor.style.left = Math.random() * 100 + "vw";
        flor.style.top = "-50px";
        flor.style.fontSize = (20 + Math.random() * 25) + "px";
        flor.style.zIndex = "999";
        flor.style.pointerEvents = "none";

        const duracion = 3 + Math.random() * 4;

        flor.style.animation = `caer ${duracion}s linear forwards`;

        document.body.appendChild(flor);

        setTimeout(() => {
            flor.remove();
        }, duracion * 1000);
    }
}
*/

function crearFlores() {

    const cantidad = 35;

    const elementos = [
        "🌻",
         "🌻",
          "🌻",
          "🌻",
          "🌻",
          "🌻",
        "❤️",
        //"💛",
        "Te amo",
        "Gina",
       // "Te amo ❤️",
        //"Te amo 🌻"
    ];

    for (let i = 0; i < cantidad; i++) {

        const elemento = document.createElement("div");

        elemento.innerHTML =
            elementos[Math.floor(Math.random() * elementos.length)];

        elemento.style.position = "fixed";
        elemento.style.left = Math.random() * 100 + "vw";
        elemento.style.top = "-80px";
        elemento.style.fontSize =
            (18 + Math.random() * 25) + "px";

        elemento.style.zIndex = "999";
        elemento.style.pointerEvents = "none";

        if (elemento.innerHTML.includes("Te amo")) {

            elemento.style.color = "#b84a00";
            elemento.style.fontWeight = "bold";
            elemento.style.fontFamily = "cursive";
        }

        const duracion = 3 + Math.random() * 4;

        elemento.style.animation =
            `caer ${duracion}s linear forwards`;

        document.body.appendChild(elemento);

        setTimeout(() => {
            elemento.remove();
        }, duracion * 1000);
    }
}


const estilo = document.createElement("style");

estilo.innerHTML = `
    @keyframes caer {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }

        100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
        }
    }
`;

document.head.appendChild(estilo);