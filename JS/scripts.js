let cardsAmount = Number(prompt("Quantas cards quer jogar?"));
let i = 0;
let index = 0;
let addCardsFirstQueue = "";
let addCardsSecondQueue = "";
let k = 0;

function comparador() {
    return Math.random() - 0.5;
}

let imgs = [];

while (cardsAmount < 4 || cardsAmount > 14 || cardsAmount % 2 !== 0) {
    cardsAmount = Number(prompt("Quantas cards quer jogar?"));
}

function sortCards() {
    let cards = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
    cards.sort(comparador);

    let firstQueue = document.querySelector(".firstQueue");
    let secondQueue = document.querySelector(".secondQueue");

    while (i < (cardsAmount / 2)) {
        imgs.push(`<img src="../files/${cards[i]}.gif" alt="${cards[i]}">`);
        imgs.push(`<img src="../files/${cards[i]}.gif" alt="${cards[i]}">`);

        i++;
    }

    imgs.sort(comparador);

    while (index < imgs.length) {

        if (cardsAmount === 4) {
            addCardsFirstQueue += `<ul class="list" onclick="turnOverCards(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
            firstQueue.innerHTML = addCardsFirstQueue;
        }

        if (cardsAmount === 6) {
            if (index % 2 === 0) {
                addCardsFirstQueue += `<ul class="list" onclick="turnOverCards(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                firstQueue.innerHTML = addCardsFirstQueue;
            } else if (index % 2 !== 0) {
                addCardsSecondQueue += `<ul class="list" onclick="turnOverCards(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                secondQueue.innerHTML = addCardsSecondQueue;
            }
        }

        if (cardsAmount === 8) {
            if (index % 2 === 0) {
                addCardsFirstQueue += `<ul class="list" onclick="turnOverCards(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                firstQueue.innerHTML = addCardsFirstQueue;
            } else if (index % 2 !== 0) {
                addCardsSecondQueue += `<ul class="list" onclick="turnOverCards(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                secondQueue.innerHTML = addCardsSecondQueue;
            }
        }

        if (cardsAmount === 10) {
            if (index % 2 === 0) {
                addCardsFirstQueue += `<ul class="list" onclick="turnOverCards(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                firstQueue.innerHTML = addCardsFirstQueue;
            } else if (index % 2 !== 0) {
                addCardsSecondQueue += `<ul class="list" onclick="turnOverCards(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                secondQueue.innerHTML = addCardsSecondQueue;
            }
        }

        if (cardsAmount === 12) {
            if (index % 2 === 0) {
                addCardsFirstQueue += `<ul class="list" onclick="turnOverCards(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                firstQueue.innerHTML = addCardsFirstQueue;
            } else if (index % 2 !== 0) {
                addCardsSecondQueue += `<ul class="list" onclick="turnOverCards(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                secondQueue.innerHTML = addCardsSecondQueue;
            }
        }

        if (cardsAmount === 14) {
            if (index % 2 === 0) {
                addCardsFirstQueue += `<ul class="list" onclick="turnOverCards(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                firstQueue.innerHTML = addCardsFirstQueue;
            } else if (index % 2 !== 0) {
                addCardsSecondQueue += `<ul class="list" onclick="turnOverCards(this)"><li class="back-face face">${imgs[index]}</li><li class="front-face face"><img src="../files/front.png"></li></ul>`;
                secondQueue.innerHTML = addCardsSecondQueue;
            }
        }

        index++;
    }
}

let setTimer = setInterval(timer, 1000);
sortCards();

let arrayCards = [];
let backFace;
let frontFace;
let parrot;
let alter = [];
let backFaceFirstSelectedCard;
let frontFaceFirstSelectedCard;
let seconds = 1;
let removeOnclick = document.querySelectorAll("ul");
let control;
let myVar;

function turnOverCards(elemento) {
    let parrot = elemento.querySelector("img");
    let parrotPai = parrot.parentNode.parentNode;
    let tituloIMG = parrot.alt;

    arrayCards.push(parrotPai);
    alter.push(tituloIMG);

    backFace = elemento.querySelector(".back-face");
    frontFace = elemento.querySelector(".front-face");
    backFace.classList.add("show");
    frontFace.classList.add("hide");

    setTimeout(hideBack, 1000);
    sameULCardClick();
    myVar = setTimeout(setOnclick, 1000);
    k++;
    setTimeout(endGame, 100);
    removeClick()
}

function hideBack() {
    if (alter.length === 2  ) {
        if (alter[1] === alter[0] && arrayCards[1] !== arrayCards[0]) {
            alter = [];
            arrayCards = [];

        } else if (alter[1] !== alter[0]) {
            backFaceFirstSelectedCard = arrayCards[0].querySelector(".back-face");
            frontFaceFirstSelectedCard = arrayCards[0].querySelector(".front-face");

            backFaceFirstSelectedCard.classList.remove("show");
            frontFaceFirstSelectedCard.classList.remove("hide");
            backFace.classList.remove("show");
            frontFace.classList.remove("hide");
            alter = [];
            arrayCards = [];
        }
    }
}

function removeClick() {
    if (alter.length === 2) {
        for (let x = 0; x < cardsAmount; x++) {
            removeOnclick[x].onclick = '';
        }
    }
}

function setOnclick () {
    if (control < cardsAmount) {
        for (let t = 0; t < cardsAmount; t++) {
            removeOnclick[t].onclick = function () {
                turnOverCards(this);
            }
        }
    }
}

//Esta função "sameULCardClick" executa imediatamente, diferentemente da função "hideback", que tem um delay de 1s. Ela impede que o algoritmo reconheça dois cliques na mesma carta como um acerto.
function sameULCardClick() {
    if (alter.length === 2 && arrayCards[1] === arrayCards[0]) {
        backFaceFirstSelectedCard.classList.remove("show");
        frontFaceFirstSelectedCard.classList.remove("hide");
        backFace.classList.remove("show");
        frontFace.classList.remove("hide");
        alter = [];
        arrayCards = [];
    }
}

function endGame() {
    control = 0;
    let points = document.querySelectorAll(".back-face");

    for (let j = 0; j < points.length; j++) {
        if (points[j].classList.contains("show")) {
            control++;
        }
    }

    if (control === points.length && control === cardsAmount) {
        clearInterval(setTimer);
        alert(`Você venceu em ${k} joagadas e em ${seconds - 1}s!`);
        let restart = prompt("Gostaria de reiniciar a partida?");
        if (restart === "Sim" || restart === "sim" || restart === "s" || restart === "SIM") {
            location.reload();
        } else {
            alert("Obrigado por jogar.");
        }
    }
}

function timer() {
    let time = document.querySelector(".timer");
    time.innerHTML = `time: ${seconds}s`;
    seconds++;
}







