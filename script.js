function verificarPergunta(){
    const palavra = document.getElementById('palavra').value.toLowerCase()
    const palavraCorreta = 'Forró'

    if (palavra == palavraCorreta){
        window.location.href = 'correto.html'
    } else {
        window.location.href = 'errado.html'
    }
}