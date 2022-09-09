
function iniciarVotacao(){

    
}

function teclar( tecla ){
    switch(tecla){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            colocarNumero( tecla )
            break;
        case 'b':
            break;
        case 'c':

            break;
        case 'con':
            confirmar(seq)
            break;
        default:
            break;
    }
}

function colocarNumero( tecla ){
    console.log(tecla)
    console.log(seq)
    switch(seq){
        case 1:
            numero1.innerHTML = tecla;
            numero1.classList.remove("pisca")
            numero2.classList.add("pisca")
            break;
        case 2:
            numero2.innerHTML = tecla;
            numero2.classList.remove("pisca")
            numero3.classList.add("pisca");
            break;
        case 3:
            numero3.innerHTML = tecla;
            numero3.classList.remove("pisca")
            numero4.classList.add("pisca")
            break;
        case 4:
            numero4.innerHTML = tecla;
            numero4.classList.remove("pisca")
            numero5.classList.add("pisca")
            break;
        case 5:
            numero5.innerHTML = tecla;
            numero5.classList.remove("pisca")
            break;
        default:
            break;
    }
    seq++
}

function confirmar(){
    if(seq > 2){
        

    }
}