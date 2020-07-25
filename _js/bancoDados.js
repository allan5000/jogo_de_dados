
function gohome() {
    window.location = 'Jogo_de_Dados'; // Pegando aonde está a pagina principal
}

function isPodeJogar() {
    if (getJogador1() == '' || getJogador2() == '') { // ta verificando se o valor dela é igual ou o outro valor é igual        
        window.history.back(); // Pegando o historico anterior da página
    }
}

function isJogador1() {
    return ($('input[value=jogador1]:checked').val() == 'jogador1'); // retornar o que eu pedi com "$" e vai comparar "==" com o que fou fornecendo a ele.
}

function isJogador2() {
    return ($('input[value=jogador2]:checked').val() == 'jogador2');
}

function save() { // Executando ao apertar o botão
    if (!isJogador1() && !isJogador2()) { // ! falando se não for igual &&=e o outro não for for
        alert('Selecione se vc é o jogador 1 ou 2!');
        
    }
    if ($('#nick').val() == '') {
        alert('Informe o seu nome!');
   
    }
    if ($('#campo1').val() == '') {
        alert('Informe o nick!');
      
    }
    if ($('#idade').val() == '') {
        alert('Informe sua idade!');
    }
    if (isJogador1()) {
        window.localStorage.setItem('NickJogador1', $('#campo1').val()); // estou criando uma nova chave (nomeando ela) e falando aonde ela se encontra.           
    } else {
        window.localStorage.setItem('NickJogador2', $('#campo1').val());
    }
}

function getJogador1() {
    if (window.localStorage.getItem('NickJogador1') == null) { // Estou indo no logal de armazenamento e estou pegando o valor não definido ainda.
        return '';
    }
    return new String(window.localStorage.getItem('NickJogador1')); // retornando uma nova referencia ao item.
}

function getJogador2() {
    if (window.localStorage.getItem('NickJogador2') == null) { // Estou indo no logal de armazenamento e estou pegando o valor não definido ainda.
        return '';
    }
    return new String(window.localStorage.getItem('NickJogador2')); // retornando uma nova referencia ao item.
}

function reiniciarJogo() {
    if (getJogador1() != '' && getJogador2() != '') { // indo nos jogadores e ver se tem uma desigualdade entre ele e retornando falso e executa a função abaixo que é apagar.        
        erase(); //Apagar
    }
}

function erase() { //Abriu uma função de apagar os valores do item escolhido.
    window.localStorage.removeItem('NickJogador1');
    window.localStorage.removeItem('NickJogador2'); // ele foi no local de armazenamento e remove os item que se encontra lá
}

function limpar(){
    $("input").val("");
  }