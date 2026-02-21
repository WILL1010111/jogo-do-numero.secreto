let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela( tag, texto ) {
    let campo = document.querySelector( tag );
    campo.innerHTML = texto;
    responsiveVoice.speak( texto, 'Brazilian Portuguese Female', { rate: 1.2 } );
}

function exibirMensagemInicial() {
    exibirTextoNaTela( ' h1 ', ' Jogo do número secreto ');
    exibirTextoNaTela( ' p ', ' Escolha o número entre 1 e 10 ' );
}

exibirMensagemInicial() 

function verificarChute() {
    let chute = document.querySelector( ' input ' ).value;
    
    if ( chute == numeroSecreto ) {
        exibirTextoNaTela( ' h1 ', ' Você acertou! ' );
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto! 
        ${tentativas} ${palavraTentativa}! `;
        exibirTextoNaTela( ' p ', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if (chute > numeroSecreto) {
            exibirTextoNaTela( ' p ', ' Numero é menor!' );
        } else {
            exibirTextoNaTela( ' p ', ' Numero é maior! ' );
        }
        tentativas++;
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt( Math.random() * numeroLimite + 1 );
   let quantidadeDeElementos = listaNumerosSorteados.length;

    if ( quantidadeDeElementos == numeroLimite ) {
        listaNumerosSorteados = [];
    } 
    if ( listaNumerosSorteados.includes( numeroEscolhido ) ) {
        return gerarNumeroAleatorio();
    }else {
        listaNumerosSorteados.push( numeroEscolhido );
        console.log( listaNumerosSorteados );
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector(' input ');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


// responcivevoice.org : SITE PARA TRANSFORMAR TEXTO EM VOZ
// [] : PARA CRIAR LISTA 
// .VALUE : PARA PEGAR O VALOR DO CAMPO DE INPUT
// RETURN : FUNÇÃO RETORNAR O VALOR 
// INPUT : ENTRADA DO USUÁRIO 
// DOCUMENT : SERVE PARA PUXAR UM DOCUMENTO DENTRO DO JS
// QUERYSELECTOR : "CASE SENSITIVI" DEFINE LETRAS MENUSCULAS E MAIUSCULAS
// INNERHTML: INSSERIR TEXTO DENTRO DO TITOLO HTML 
// Fuctio : SEMPE QUE PRECISAR CRIAR UMA FUNÇÃO UTILIZALA  
