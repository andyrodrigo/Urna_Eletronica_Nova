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
}

function limpaTela(){
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
    mostraBaixo.style.display =  "none"
}

function colocarNumero( tecla ){
   // console.log(tecla)
   // console.log(seq)
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
            DE[indice] = tecla;
            break;
        case 3:
            SE[indice] = tecla;
            break;
        case 4:
            GO[indice] = tecla;
            break;
        case 5:
            PR[indice] = tecla;
            break;
        default:
            break;
    }
}

function limparNumeroCandidato(){
    switch( processo ){
        case 1:
            DF= new Array(5);
            break;
        case 2:
            DE = new Array(5);
            break;
        case 3:
            SE = new Array(5);
            break;
        case 4:
            GO = new Array(5);
            break;
        case 5:
            PR = new Array(5);
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
            verificarSE();
            break;
        case 4:
            verificarGO();
            break;
        case 5:
            verificarPR();
            break;
    }
    preencherDadosDaUrna();
}

function preencherDadosDaUrna(){
    mc1.innerText = "SEU VOTO PARA";
    mc3.innerText = "Número:";
    mc4.innerText = "Nome:";
    mc5.innerText = "Partido:";
}

function verificarDF(){
    let numeroVotado = DF.toString();
    console.log(numeroVotado);

    if( numeroVotado == df1.numero ){
        colocarDadosCandidato( df1 );
        //console.log('bulba');
    } else if ( numeroVotado == df2.numero ){
        colocarDadosCandidato( df2 );
        //console.log('char');
    }else if ( numeroVotado == df3.numero ){
        colocarDadosCandidato( df3 );
        //console.log('sq');
    }else if ( numeroVotado.charAt(0) == partido1.numero.charAt(0) && numeroVotado.charAt(2) == partido1.numero.charAt(2) ){
        colocarDadosCandidato( partido1 );
        //console.log('PG');
    }else if ( numeroVotado.charAt(0) == partido2.numero.charAt(0) && numeroVotado.charAt(2) == partido2.numero.charAt(2) ){
        colocarDadosCandidato( partido2 );
        //console.log('PF');
    }else if ( numeroVotado.charAt(0) == partido3.numero.charAt(0) && numeroVotado.charAt(2) == partido3.numero.charAt(2) ){
        colocarDadosCandidato( partido3 );
        console.log('PA');
    }else{
        console.log('nulo');
    }
}

function colocarDadosCandidato( objeto ){
    nomeCandidato.innerText = objeto.nome;
    partidoCandidato.innerText = objeto.partido;
    mostraBaixo.style.display =  "block"
}

function verificarDE(){
    let numeroVotado = DE.toString();
    console.log(numeroVotado);

    if( numeroVotado == candidatoB ){
        votados[seq] = "bulbasaur"
        console.log('bulba');
    } else if ( numeroVotado == candidatoC ){
        votados[seq] = "charmander"
        console.log('char');
    }else if ( numeroVotado == candidatoS ){
        votados[seq] = "squirtle"
        console.log('sq');
    }else if ( numeroVotado.charAt(0) == partidoPG.charAt(0) && numeroVotado.charAt(2) == partidoPG.charAt(2) ){
        votados[seq] = "PG"
        console.log('PG');
    }else if ( numeroVotado.charAt(0) == partidoPA.charAt(0) && numeroVotado.charAt(2) == partidoPA.charAt(2) ){
        votados[seq] = "PF"
        console.log('PF');
    }else if ( numeroVotado.charAt(0) == partidoPF.charAt(0) && numeroVotado.charAt(2) == partidoPF.charAt(2) ){
        votados[seq] = "PA"
        console.log('PA');
    }else{
        votados[seq] = "nulo"
        console.log('nulo');
    }
}

function confirmar(){
    if(seq > 2){
        console.log('votado');
        limpaTela();
        processo++;
        seq = 1;
        mudarProcesso();
    }
}

function mudarProcesso(){
    switch(processo){
        case 2:
            mc2.innerText = "Deputado Estadual";
            break;
        case 3:
            mc2.innerText = "Senador";
            break;
        case 4:
            mc2.innerText = "Governador";
            break;
        case 5:
            mc2.innerText = "Presidente";
            break;
        default:
            break;
    }
}

const url = "https://script.google.com/macros/s/AKfycbxzvj12wdAJiAj4osxFYcsRJlYCxtQ6EG-8tD5JB_LNTVGD73nXZV7mvEZ3k_NXOhPz/exec";

function testar(){

    fetch( url ).then( d => d.json() ).then(
        d => {
            document.getElementById( "teste3" ).textContent = d[1].candidato + d[1].voto + d[1].partido;
            console.log( d )
        });
}

function testar2(){

    console.log("ok")

    fetch(url ,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        //credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        //referrerPolicy: 'no-referrer',
        body: JSON.stringify( {candidato:"bulbasaur", voto:"1"} )
    });

}