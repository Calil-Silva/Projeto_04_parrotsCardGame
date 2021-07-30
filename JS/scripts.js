let qtdCartas = Number(prompt("Quantas cartas quer jogar?"));
let i = 0;
let index = 0;
let addCartas = "";

function comparador() {
    return Math.random() - 0.5;
}

let teste = [];

while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0) {
    qtdCartas = Number(prompt("Quantas cartas quer jogar?"));
}

function darCartas() {


    let cartas = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
    cartas.sort(comparador);

    let baralho = document.querySelector("div");

    while (i < (qtdCartas / 2)) {

        teste.push(`<img src="../files/${cartas[i]}.gif" alt="${cartas[i]}">`);
        teste.push(`<img src="../files/${cartas[i]}.gif" alt="${cartas[i]}">`);

        i++;

    }

    teste.sort(comparador);

    while (index < teste.length) {

        addCartas += `<ul class="lista" onclick="virarCarta(this)"><li class="back-face face">${teste[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;

        baralho.innerHTML = addCartas;

        index++;
    }
}

darCartas();

// function numCartas() {

//     let display = document.querySelector(".lista");
//     if (qtdCartas === 8) {
//         display.classList.add("oitoCartas");
//     } else if (qtdCartas === 10) {
//         display.classList.add("dezCartas");
//     } else if (qtdCartas === 12) {
//         display.classList.add("dozeCartas");
//     } else if (qtdCartas === 14) {
//         display.classList.add("quatorzeCartas");
//     }
// }

// numCartas();

let myArray = [];
let backFace;
let frontFace;
let parrot;
let alter = [];
let backFaceFirst;
let frontFaceFirst;

function virarCarta(elemento) {
    let parrot = elemento.querySelector("img");
    let parrotPai = parrot.parentNode.parentNode;
    let tituloCards = parrot.alt;

    myArray.push(parrotPai);
    alter.push(tituloCards);

    backFace = elemento.querySelector(".back-face");
    frontFace = elemento.querySelector(".front-face");
    backFace.classList.add("showFront");
    frontFace.classList.add("hideBack");

    setTimeout(desvirarCartas, 1000);
    cartasIguais();
}



