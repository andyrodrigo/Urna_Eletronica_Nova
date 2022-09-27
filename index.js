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

let btnCola = document.getElementById("btnCola")
let cola = document.getElementById("cola")
let btnFechar = document.getElementById("btnFechar")

let campoNumero = document.getElementById("campoNumero")
let numero1 = document.getElementById("numero1")
let numero2 = document.getElementById("numero2")
let numero3 = document.getElementById("numero3")
let numero4 = document.getElementById("numero4")
let numero5 = document.getElementById("numero5")

let mc1 = document.getElementById("mc1")
let mc2 = document.getElementById("mc2")
let mc3 = document.getElementById("mc3")
let mc4 = document.getElementById("mc4")
let mc5 = document.getElementById("mc5")

let nulo1 = document.getElementById("nulo1")
let nulo2 = document.getElementById("nulo2")

let tecladoAberto = true;

let nomeCandidato = document.getElementById("nomeCandidato")
let partidoCandidato = document.getElementById("partidoCandidato")
let fotoCandidato = document.getElementById("fotoCandidato")

let mostraCima = document.getElementById("mostraCima")
let mostraBaixo = document.getElementById("mostraBaixo")
let imprimir = document.getElementById("imprimir")
let urna = document.getElementById("urna")
let boletim = document.getElementById("boletim")

let votosDF1 = document.getElementById("votosDF1")
let votosDF2 = document.getElementById("votosDF2")
let votosDF3 = document.getElementById("votosDF3")
let votosDE1 = document.getElementById("votosDE1")
let votosDE2 = document.getElementById("votosDE2")
let votosDE3 = document.getElementById("votosDE3")
let votosSE1 = document.getElementById("votosSE1")
let votosSE2 = document.getElementById("votosSE2")
let votosGO1 = document.getElementById("votosGO1")
let votosGO2 = document.getElementById("votosGO2")
let votosPR1 = document.getElementById("votosPR1")
let votosPR2 = document.getElementById("votosPR2")
let branco1 = document.getElementById("branco1")
let branco2 = document.getElementById("branco2")
let branco3 = document.getElementById("branco3")
let branco4 = document.getElementById("branco4")
let branco5 = document.getElementById("branco5")
let nulos1 = document.getElementById("nulos1")
let nulos2 = document.getElementById("nulos2")
let nulos3 = document.getElementById("nulos3")
let nulos4 = document.getElementById("nulos4")
let nulos5 = document.getElementById("nulos5")

var somTecla = new Audio("sons/tecla.mp3")
var somConfirma = new Audio("sons/confirma.mp3")
var somFim = new Audio("sons/fim.mp3")

let DF = new Array(4)
let DE = new Array(5)
let SE = new Array(3)
let GO = new Array(2)
let PR = new Array(2)

let votados = new String(5);

let seq = 1;
let processo = 1;

function ligar(){
    mostrador.style.display = 'flex'
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

    imprimir.addEventListener('click', imprimirBoletim )
    btnCola.addEventListener('click', mostrarCola )
    btnFechar.addEventListener('click', fechar )

}

//-----------------------------------------------------------------------------------------------------------------------

//inicialização
window.addEventListener("load", escutadores)
window.addEventListener("load", ligar)