//Variáveis-------------------------------------------

let mostrador = document.getElementById("mostrador")

let telaClara = document.getElementById("telaClara")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")
let btn0 = document.getElementById("btn0")
let btnBranco = document.getElementById("btnBranco")
let btnCorrige = document.getElementById("btnCorrige")
let btnConfirma = document.getElementById("btnConfirma")
let numero1 = document.getElementById("numero1")
let numero2 = document.getElementById("numero2")
let numero3 = document.getElementById("numero3")
let numero4 = document.getElementById("numero4")
let numero5 = document.getElementById("numero5")
let DF = new Array(5)
let DE = new Array(5)
let SE = new Array(3)
let GO = new Array(2)
let PR = new Array(2)
let seq = 1;
let processo = 1;

function teste(){
    telaClara.innerHTML = 'ok'
}

function ligar(){
    mostrador.style.display = 'flex'
    iniciarVotacao()
}

//Escutadores---------------------------------------------------------------------------
function escutadores(){
    btn0.addEventListener('click', function(){ teclar('0') } )
    btn1.addEventListener('click', function(){ teclar('1') })
    btn2.addEventListener('click', function(){ teclar('2') })
    btn3.addEventListener('click', function(){ teclar('3') })
    btn4.addEventListener('click', function(){ teclar('4') })
    btn5.addEventListener('click', function(){ teclar('5') })
    btn6.addEventListener('click', function(){ teclar('6') })
    btn7.addEventListener('click', function(){ teclar('7') })
    btn8.addEventListener('click', function(){ teclar('8') })
    btn9.addEventListener('click', function(){ teclar('9') })
    btnBranco.addEventListener('click', function(){ teclar('b') })
    btnCorrige.addEventListener('click', function(){ teclar('c') })
    btnConfirma.addEventListener('click', function(){ teclar('con') })

}

//-----------------------------------------------------------------------------------------------------------------------

//inicialização
window.addEventListener("load", escutadores)
window.addEventListener("load", ligar)