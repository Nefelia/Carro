var carro = document.querySelector ('.moto')
var fondo = document.querySelector ('.fondo')
var rueda = document.querySelector ('.ruedas')
var rueda2 = document.querySelector ('.ruedas2')
var polvo = document.querySelector ('.polvo')
var luz = document.querySelector ('.laluz')

fondo.addEventListener('click', animacion)

function animacion() {
    fondo.classList.add('fondo_anim')
    rueda.classList.add('ruedas_anim')
    rueda2.classList.add('ruedas_anim')
    polvo.classList.remove('oculto')
    luz.classList.remove('oculto2')
}