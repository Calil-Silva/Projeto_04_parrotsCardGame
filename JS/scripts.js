let qtdCartas = Number(prompt("Quantas cartas quer jogar?"));

while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0) {
    qtdCartas = prompt("Quantas cartas quer jogar?");
}