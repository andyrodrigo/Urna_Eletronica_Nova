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