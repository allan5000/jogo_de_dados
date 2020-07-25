// Declarando os valores das variaveis

var nroJogador1 = 10, nroJogador2 = 10;
var pontosJogador1 = 10, pontosJogador2 = 10;

// Imagens Aleatorias

function mudar1() {
    nroJogador1 = Math.floor(Math.random() * 6 + 1); //ele ta arredondando os numeros e fazendo eles aparecer em ordem aleatoria.

    if (nroJogador1 === 1) {
        document.getElementById('dadoone').src = "img_dados/dado1.png";
    }
    else if (nroJogador1 === 2) {
        document.getElementById('dadoone').src = "img_dados/dado2.png";
    }
    else if (nroJogador1 === 3) {
        document.getElementById('dadoone').src = "img_dados/dado3.png";
    }
    else if (nroJogador1 === 4) {
        document.getElementById('dadoone').src = "img_dados/dado4.png";
    }
    else if (nroJogador1 === 5) {
        document.getElementById('dadoone').src = "img_dados/dado5.png";
    }
    else if (nroJogador1 === 6) {
        document.getElementById('dadoone').src = "img_dados/dado6.png";
    }
}

function mudar2() {
    nroJogador2 = Math.floor(Math.random() * 6 + 1); //ele ta arredondando os numeros e fazendo eles aparecer em ordem aleatoria. 

    if (nroJogador2 === 1) {
        document.getElementById('dadotwo').src = "img_dados/dado1.png";
    }
    else if (nroJogador2 === 2) {
        document.getElementById('dadotwo').src = "img_dados/dado2.png";
    }
    else if (nroJogador2 === 3) {
        document.getElementById('dadotwo').src = "img_dados/dado3.png";
    }
    else if (nroJogador2 === 4) {
        document.getElementById('dadotwo').src = "img_dados/dado4.png";
    }
    else if (nroJogador2 === 5) {
        document.getElementById('dadotwo').src = "img_dados/dado5.png";
    }
    else if (nroJogador2 === 6) {
        document.getElementById('dadotwo').src = "img_dados/dado6.png";
    }
}

function resultadoJogo() {
    if (nroJogador1 > nroJogador2) { // Se o resultado for maior que o do outro jogador
        pontosJogador1++, pontosJogador2--; // o valor vai ser adicionado +1 e o outro jogador vai ser -1
    } else if (nroJogador1 < nroJogador2) { // mesma coisa da de cima mas com outro sinal.
        pontosJogador2++, pontosJogador1--;
    }


    $('#resultadoJogador1').html(' ' + pontosJogador1 + ' pontos'); //Vai mostrar apenas os pontos
    $('#resultadoJogador2').html(' ' + pontosJogador2 + ' pontos');

    $('#Jogador1').html(getJogador1() + ' '); // Vai pegar os jogadores
    $('#Jogador2').html(getJogador2() + ' ');

}