//Variáveis-------------------------------------------

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

function teste(){
    telaClara.innerHTML = 'ok'
}

//Escutadores---------------------------------------------------------------------------
function escutadores(){
    btn0.addEventListener('click', teste)
    btn1.addEventListener('click', teste)
    btn2.addEventListener('click', teste)
    btn3.addEventListener('click', teste)
    btn4.addEventListener('click', teste)
    btn5.addEventListener('click', teste)
    btn6.addEventListener('click', teste)
    btn7.addEventListener('click', teste)
    btn8.addEventListener('click', teste)
    btn9.addEventListener('click', teste)
    btn0.addEventListener('click', teste)

}

//-----------------------------------------------------------------------------------------------------------------------

//inicialização
window.addEventListener("load", escutadores)