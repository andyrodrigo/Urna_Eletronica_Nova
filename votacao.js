
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
            somTecla.play();
            colocarNumero( tecla )
            break;
        case 'b':
            if( seq == 1){
                somTecla.play();
                votarBranco()
            }
            break;
        case 'c':
            somTecla.play();
            corrigir()
            break;
        case 'con':
            confirmar(seq)
            break;
        default:
            break;
    }
}

function corrigir(){
    seq = 1;
    limpaTela();
    limparNumeroCandidato();
    tecladoAberto = true;
}

function limpaTela(){
    fotoCandidato.style.display = "none";
    campoNumero.style.display =  "flex";
    numero1.innerHTML = "";
    numero2.innerHTML = "";
    numero3.innerHTML = "";
    numero4.innerHTML = "";
    numero5.innerHTML = "";
    numero1.classList.add("pisca")
    numero2.classList.remove("pisca")
    numero3.classList.remove("pisca")
    numero4.classList.remove("pisca")
    numero5.classList.remove("pisca")
    mc1.innerText = "";
    mc3.innerText = "";
    mc4.innerText = "";
    mc5.innerText = "";
    nomeCandidato.innerText = "";
    partidoCandidato.innerText = "";
    nulo1.innerText = "";
    nulo2.innerText = "";
    mostraBaixo.style.display =  "none"
}

function colocarNumero( tecla ){

   if( tecladoAberto ){
        switch(seq){
            case 1:
                numero1.innerHTML = tecla;
                inserirNumeroCandidato( tecla )
                numero1.classList.remove("pisca")
                numero2.classList.add("pisca")
                break;
            case 2:
                numero2.innerHTML = tecla;
                inserirNumeroCandidato( tecla )
                numero2.classList.remove("pisca")
                numero3.classList.add("pisca");
                conferir( processo );
                break;
            case 3:
                numero3.innerHTML = tecla;
                inserirNumeroCandidato( tecla )
                numero3.classList.remove("pisca")
                numero4.classList.add("pisca")
                conferir( processo );
                break;
            case 4:
                numero4.innerHTML = tecla;
                inserirNumeroCandidato( tecla )
                numero4.classList.remove("pisca")
                numero5.classList.add("pisca")
                conferir( processo );
                break;
            case 5:
                numero5.innerHTML = tecla;
                inserirNumeroCandidato( tecla )
                numero5.classList.remove("pisca")
                conferir( processo );
                break;
            default:
                break;
        }
        seq++
   }
}

function inserirNumeroCandidato( tecla ){
    let indice = seq - 1;
    switch( processo ){
        case 1:
            if(seq < 5){
                DF[indice] = tecla;
            }
            break;
        case 2:
            if(seq < 6){
                DE[indice] = tecla;
            }
            DE[indice] = tecla;
            break;
        case 3:
            if(seq < 4){
                SE[indice] = tecla;
            }
            break;
        case 4:
            if(seq < 3){
                GO[indice] = tecla;
            }
            break;
        case 5:
            if(seq < 3){
                PR[indice] = tecla;
            }
            break;
        default:
            break;
    }
}

function limparNumeroCandidato(){
    switch( processo ){
        case 1:
            DF= new Array(4);
            break;
        case 2:
            DE = new Array(5);
            break;
        case 3:
            SE = new Array(3);
            break;
        case 4:
            GO = new Array(2);
            break;
        case 5:
            PR = new Array(2);
            break;
        default:
            break;
    }
}

function conferir( processo ){
    switch(processo){
        case 1:
            verificarDF();
            break;
        case 2:
            verificarDE();
            break;
        case 3:
            if(seq > 2){
                verificarSE();
            }
            break;
        case 4:
            verificarGO();
            break;
        case 5:
            verificarPR();
            break;
        case 6:
            mostrarFim();

            break;
    }
    preencherDadosDaUrna();
}

function preencherDadosDaUrna(){
    mc1.innerText = "SEU VOTO PARA";
    mc3.innerText = "Número:";
    mc5.innerText = "Partido:";
}

function colocarDadosCandidato( objeto , completo){
    mc3.style.display = "block";
    mc4.style.display = "block";
    mc5.style.display = "block";
    nulo1.innerHTML = "";
    nulo2.innerHTML = "";
    nomeCandidato.innerText = objeto.nome;
    partidoCandidato.innerText = objeto.partido;
    fotoCandidato.style.display = "block"
    fotoCandidato.src = objeto.imagem;
    mostraBaixo.style.display =  "flex";
    if(objeto.legenda){
        fotoCandidato.style.display = "none"
        mc4.innerText = "";
        mostraBaixoB.style.display =  "flex";
        if(completo){
            nulo1.innerHTML = "Candidato Inexistente";
            nulo2.innerHTML = "VOTO DE LEGENDA";
        }   
    }else{
        mc4.innerText = "Nome:";
        mostraBaixoB.style.display =  "none";
    }
}

function votarNulo() {
    nulo1.innerHTML = nulo.nome;
    nulo2.innerHTML = nulo.partido;
    mc4.style.display = "none";
    mc5.style.display = "none";
    nomeCandidato.innerText = "";
    partidoCandidato.innerText = "";
    mostraBaixo.style.display =  "flex";
    mostraBaixoB.style.display =  "none";
}

function votarBranco(){
    nulo1.innerHTML = "";
    nulo2.innerHTML = "VOTO EM BRANCO";
    mc4.style.display = "none";
    mc5.style.display = "none";
    nomeCandidato.innerText = "";
    partidoCandidato.innerText = "";
    mostraBaixo.style.display =  "flex";
    mostraBaixoB.style.display =  "none";
    tecladoAberto = false;
    campoNumero.style.display =  "none";
    votados[processo] = "branco" + processo.toString();
    seq=4;
}

function confirmar(){
    if( processo != 3){
        if(seq > 2 ){
            aceitaConfirma()
        }
    }else{
        if(seq > 3 ){
            aceitaConfirma()
        }
    }
}

function aceitaConfirma(){
    somConfirma.play();
    console.log( votados );
    limpaTela();
    processo++;
    seq = 1;
    mudarProcesso();
    tecladoAberto = true;
}

function mudarProcesso(){
    switch(processo){
        case 2:
            mc2.innerText = "Deputado Estadual";
            numero5.style.display = "flex"
            break;
        case 3:
            mc2.innerText = "Senador";
            numero4.style.display = "none"
            numero5.style.display = "none"
            break;
        case 4:
            mc2.innerText = "Governador";
            numero3.style.display = "none"
            break;
        case 5:
            mc2.innerText = "Presidente";
            break;
        case 6:
            mostrarFim();
            break;
        default:
            break;
    }
}

function mostrarFim(){
    
    cronometro = setInterval( () => {temporizar();} , 1000 ) // ajuste a cada 1 segundo
    enviar();
    mostraCima.classList.add("fim")
    mostraCima.innerHTML = "FIM"
    mostraBaixo.style.display = "flex";
    mostraBaixo.classList.remove("bordaUnica")
    mostraBaixo.classList.add("fimDeVoto")
    mostraBaixo.innerText = "VOTOU"
    somFim.play();
    imprimir.style.display = "block";
    btnCola.style.display = "none"
    cola.style.display = "none"
}

function temporizar(){
    let dia = new Date();
    let diaDasemana = pegarDia( dia );
    let data = dia.toLocaleDateString();
    let hora = dia.toLocaleTimeString();
    mc1.innerText = diaDasemana + " " + data.toString() + " " + hora.toString();
}

function pegarDia( dia ){
    let n = dia.getDay()
    switch(n){
        case 0:
            return "DOM";
        case 1:
            return "SEG";
        case 2:
            return "TER";
        case 3:
            return "QUA";;
        case 4:
            return "QUI";
        case 5:
            return "SEX";
        case 6:
            return "SAB";
        default:
            break;
    }
}

function imprimirBoletim(){
    buscar();
    imprimir.style.display = "none"
    urna.style.display = "none"
    boletim.style.display = "flex"
}

function mostrarCola(){
    btnCola.style.display = "none"
    cola.style.display = "flex"
}

function fechar(){
    btnCola.style.display = "block"
    cola.style.display = "none"
}