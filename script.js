const callBicho = document.getElementById('call-jogo-do-bicho')
const callPalavra = document.getElementById('call-caca-palavra')
const body = document.getElementsByTagName('body')[0]

const callingBicho = () =>{
    window.location = './jogo-do-bicho/jogo-do-bicho.html'
}

callBicho.addEventListener('click', callingBicho)

const callingPalavra = () =>{
    window.location = './caca-palavra/caca-palavra.html'
}

callPalavra.addEventListener('click', callingPalavra)