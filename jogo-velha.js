const X = "X";
const O = "O";
let valor = X;
const quadradoJogo = document.querySelector(".quadrado-jogo");

function reiniciarJogo() {
    
}

function selecionarArea(posicaoLinha, posicaoColuna) {
     desenharSimbolo(valor, posicaoLinha, posicaoColuna);
    if (valor ==X) {
        valor = O
        
    }
     else {
        valor = X

     }

    
     marcarJogadorAtivo(valor);

     exibirResultado("");
}