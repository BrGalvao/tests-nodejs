const EventEmiiter = require('events')

class MeuEmissor extends EventEmiiter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function(click) {
    console.log('um usuario clicou', click)
})

meuEmissor.emit(nomeEvento, 'na barra de rolagem')
meuEmissor.emit(nomeEvento, 'no OK')

let count = 0
setInterval(function() {
    meuEmissor.emit(nomeEvento, 'no OK' + (count++))
}, 1000);