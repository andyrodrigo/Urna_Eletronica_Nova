function verificarDF(){
    let numeroVotado = DF.toString();
    console.log(numeroVotado);

    if( numeroVotado == df1.numero ){
        colocarDadosCandidato( df1 , true );
        votados[processo] = "bulbasaur"
        //console.log('bulba');
    } else if ( numeroVotado == df2.numero ){
        colocarDadosCandidato( df2, true );
        votados[processo] = "charmander"
        //console.log('char');
    }else if ( numeroVotado == df3.numero ){
        colocarDadosCandidato( df3, true );
        votados[processo] = "squirtle"
        //console.log('sq');
    }else if ( numeroVotado.charAt(0) == partido1.numero.charAt(0) && numeroVotado.charAt(2) == partido1.numero.charAt(2) ){
        votados[processo] = "bulbasaur"
        if( seq == 4 ){
            colocarDadosCandidato( partido1, true );
        }else{
            colocarDadosCandidato( partido1, false );
        }   
        //console.log('PG');
    }else if ( numeroVotado.charAt(0) == partido2.numero.charAt(0) && numeroVotado.charAt(2) == partido2.numero.charAt(2) ){
        votados[processo] = "charmander"
        if( seq == 4 ){
            colocarDadosCandidato( partido2, true );
        }else{
            colocarDadosCandidato( partido2, false );
        } 
        //console.log('PF');
    }else if ( numeroVotado.charAt(0) == partido3.numero.charAt(0) && numeroVotado.charAt(2) == partido3.numero.charAt(2) ){
        votados[processo] = "squirtle"
        if( seq == 4 ){
            colocarDadosCandidato( partido3, true );
        }else{
            colocarDadosCandidato( partido3, false );
        } 
        //console.log('PA');
    }else{
        votados[processo] = "nulo1"
        votarNulo();
        console.log('nulo1');
    }
}

function verificarDE(){
    let numeroVotado = DE.toString();
    console.log(numeroVotado);

    if( numeroVotado == de1.numero ){
        colocarDadosCandidato( de1 , true );
        votados[processo] = "cachoeira"
        //console.log('bulba');
    } else if ( numeroVotado == de2.numero ){
        colocarDadosCandidato( de2, true );
        votados[processo] = "praia"
        //console.log('char');
    }else if ( numeroVotado == de3.numero ){
        colocarDadosCandidato( de3, true );
        votados[processo] = "piscina"
        //console.log('sq');
    }else if ( numeroVotado.charAt(0) == partido1.numero.charAt(0) && numeroVotado.charAt(2) == partido1.numero.charAt(2) ){
        votados[processo] = "cachoeira"
        if( seq == 5 ){
            colocarDadosCandidato( partido1, true );
        }else{
            colocarDadosCandidato( partido1, false );
        }   
        //console.log('PG');
    }else if ( numeroVotado.charAt(0) == partido2.numero.charAt(0) && numeroVotado.charAt(2) == partido2.numero.charAt(2) ){
        votados[processo] = "praia"
        if( seq == 5 ){
            colocarDadosCandidato( partido2, true );
        }else{
            colocarDadosCandidato( partido2, false );
        } 
        //console.log('PF');
    }else if ( numeroVotado.charAt(0) == partido3.numero.charAt(0) && numeroVotado.charAt(2) == partido3.numero.charAt(2) ){
        votados[processo] = "piscina"
        if( seq == 5 ){
            colocarDadosCandidato( partido3, true );
        }else{
            colocarDadosCandidato( partido3, false );
        } 
        //console.log('PA');
    }else{
        votados[processo] = "nulo2"
        votarNulo();
        console.log('nulo2');
    }
}

function verificarSE(){
    let numeroVotado = SE.toString();
    console.log(numeroVotado);

    if( numeroVotado == se1.numero ){
        colocarDadosCandidato( se1 , true );
        votados[processo] = "goku"
        //console.log('bulba');
    } else if ( numeroVotado == se2.numero ){
        colocarDadosCandidato( se2, true );
        votados[processo] = "vegeta"
        //console.log('char');
    }else{
        votados[processo] = "nulo3"
        votarNulo();
        console.log('nulo3');
    }
}

function verificarGO(){
    let numeroVotado = GO.toString();
    console.log(numeroVotado);

    if( numeroVotado == go1.numero ){
        colocarDadosCandidato( go1 , true );
        votados[processo] = "bolacha"
        //console.log('bulba');
    } else if ( numeroVotado == go2.numero ){
        colocarDadosCandidato( go2, true );
        votados[processo] = "biscoito"
        //console.log('char');
    }else{
        votados[processo] = "nulo4"
        votarNulo();
        console.log('nulo4');
    }
}

function verificarPR(){
    let numeroVotado = PR.toString();
    console.log(numeroVotado);

    if( numeroVotado == pr1.numero ){
        colocarDadosCandidato( pr1 , true );
        votados[processo] = "cap"
        //console.log('bulba');
    } else if ( numeroVotado == pr2.numero ){
        colocarDadosCandidato( pr2, true );
        votados[processo] = "iron"
        //console.log('char');
    }else{
        votados[processo] = "nulo5"
        votarNulo();
        console.log('nulo5');
    }
}