function verificarPergunta(){
    const palavra = document.getElementById('palavra').value
    const palavraCorreta = 'Forró'

    if (palavra == palavraCorreta){
        window.location.href = 'correto.html'
    } else {
        window.location.href = 'errado.html'
    }
}