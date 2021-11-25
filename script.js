const callBicho = document.getElementById('call-jogo-do-bicho')
const callPalavra = document.getElementById('call-caca-palavra')

const callingBicho = () =>{
    window.location = './jogo-do-bicho/jogo-do-bicho.html'
}

callBicho.addEventListener('click', callingBicho)

const callingPalavra = () =>{
    window.location = './caca-palavras/index.html'
}
callPalavra.addEventListener('click', callingPalavra)
 