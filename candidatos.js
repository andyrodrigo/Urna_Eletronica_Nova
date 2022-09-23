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
        votados[processo] = "tg"
        if( seq == 4 ){
            colocarDadosCandidato( partido1, true );
        }else{
            colocarDadosCandidato( partido1, false );
        }   
        //console.log('PG');
    }else if ( numeroVotado.charAt(0) == partido2.numero.charAt(0) && numeroVotado.charAt(2) == partido2.numero.charAt(2) ){
        votados[processo] = "tf"
        if( seq == 4 ){
            colocarDadosCandidato( partido2, true );
        }else{
            colocarDadosCandidato( partido2, false );
        } 
        //console.log('PF');
    }else if ( numeroVotado.charAt(0) == partido3.numero.charAt(0) && numeroVotado.charAt(2) == partido3.numero.charAt(2) ){
        votados[processo] = "ta"
        if( seq == 4 ){
            colocarDadosCandidato( partido3, true );
        }else{
            colocarDadosCandidato( partido3, false );
        } 
        //console.log('PA');
    }else{
        votados[processo] = "nulo"
        votarNulo();
        console.log('nulo');
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
        votados[processo] = "tg"
        if( seq == 5 ){
            colocarDadosCandidato( partido1, true );
        }else{
            colocarDadosCandidato( partido1, false );
        }   
        //console.log('PG');
    }else if ( numeroVotado.charAt(0) == partido2.numero.charAt(0) && numeroVotado.charAt(2) == partido2.numero.charAt(2) ){
        votados[processo] = "tf"
        if( seq == 5 ){
            colocarDadosCandidato( partido2, true );
        }else{
            colocarDadosCandidato( partido2, false );
        } 
        //console.log('PF');
    }else if ( numeroVotado.charAt(0) == partido3.numero.charAt(0) && numeroVotado.charAt(2) == partido3.numero.charAt(2) ){
        votados[processo] = "ta"
        if( seq == 5 ){
            colocarDadosCandidato( partido3, true );
        }else{
            colocarDadosCandidato( partido3, false );
        } 
        //console.log('PA');
    }else{
        votados[processo] = "nulo"
        votarNulo();
        console.log('nulo');
    }
}