let qtdCartas = Number(prompt("Quantas cartas quer jogar?"));
let i = 0;
let index = 0;
let addCartas = "";
let addCartas2 = "";

function comparador() {
    return Math.random() - 0.5;
}

let imgs = [];

while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0) {
    qtdCartas = Number(prompt("Quantas cartas quer jogar?"));
}

function darCartas() {
    let cartas = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
    cartas.sort(comparador);

    let baralho = document.querySelector(".display");
    let baralho2 = document.querySelector(".display2");

    while (i < (qtdCartas / 2)) {
        imgs.push(`<img src="../files/${cartas[i]}.gif" alt="${cartas[i]}">`);
        imgs.push(`<img src="../files/${cartas[i]}.gif" alt="${cartas[i]}">`);

        i++;
    }

    imgs.sort(comparador);

    while (index < imgs.length) {

        if (qtdCartas === 4) {
            addCartas += `<ul class="lista" onclick="virarCarta(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
            baralho.innerHTML = addCartas;
        }

        if (qtdCartas === 6) {
            if (index % 2 === 0) {
                addCartas += `<ul class="lista" onclick="virarCarta(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                baralho.innerHTML = addCartas;
            } else if (index % 2 !== 0) {
                addCartas2 += `<ul class="lista" onclick="virarCarta(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                baralho2.innerHTML = addCartas2;
            }
        }

        if (qtdCartas === 8) {
            if (index % 2 === 0) {
                addCartas += `<ul class="lista" onclick="virarCarta(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                baralho.innerHTML = addCartas;
            } else if (index % 2 !== 0) {
                addCartas2 += `<ul class="lista" onclick="virarCarta(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                baralho2.innerHTML = addCartas2;
            }
        }

        if (qtdCartas === 10) {
            if (index % 2 === 0) {
                addCartas += `<ul class="lista" onclick="virarCarta(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                baralho.innerHTML = addCartas;
            } else if (index % 2 !== 0) {
                addCartas2 += `<ul class="lista" onclick="virarCarta(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                baralho2.innerHTML = addCartas2;
            }
        }

        if (qtdCartas === 12) {
            if (index % 2 === 0) {
                addCartas += `<ul class="lista" onclick="virarCarta(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                baralho.innerHTML = addCartas;
            } else if (index % 2 !== 0) {
                addCartas2 += `<ul class="lista" onclick="virarCarta(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                baralho2.innerHTML = addCartas2;
            }
        }

        if (qtdCartas === 14) {
            if (index % 2 === 0) {
                addCartas += `<ul class="lista" onclick="virarCarta(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                baralho.innerHTML = addCartas;
            } else if (index % 2 !== 0) {
                addCartas2 += `<ul class="lista" onclick="virarCarta(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                baralho2.innerHTML = addCartas2;
            }
        }

        index++;
    }
}

darCartas();

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

function desvirarCartas() {
    if (alter.length === 2) {
        if (alter[1] === alter[0] && myArray[1] !== myArray[0]) {
            alter = [];
            myArray = [];
            i = 0;
        } else if (alter[1] !== alter[0] || myArray[1] === myArray[0]) {
            backFaceFirst = myArray[0].querySelector(".back-face");
            frontFaceFirst = myArray[0].querySelector(".front-face");

            backFaceFirst.classList.remove("showFront");
            frontFaceFirst.classList.remove("hideBack");
            backFace.classList.remove("showFront");
            frontFace.classList.remove("hideBack");
            alter = [];
            myArray = [];
            i = 0;
        }
    }
}

function cartasIguais() {
    if (alter.length === 2) {
        if (myArray[1] === myArray[0]) {
            backFaceFirst.classList.remove("showFront");
            frontFaceFirst.classList.remove("hideBack");
            backFace.classList.remove("showFront");
            frontFace.classList.remove("hideBack");
            alter = [];
            myArray = [];
            i = 0;
        }
    }
}



