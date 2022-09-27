const url = "https://script.google.com/macros/s/AKfycbxzvj12wdAJiAj4osxFYcsRJlYCxtQ6EG-8tD5JB_LNTVGD73nXZV7mvEZ3k_NXOhPz/exec";

function buscar(){

    fetch( url ).then( d => d.json() ).then(
        d => {
            votosDF1.textContent = d[0].voto ;
            votosDF2.textContent = d[1].voto ;
            votosDF3.textContent = d[2].voto ;
            votosDE1.textContent = d[3].voto ;
            votosDE2.textContent = d[4].voto ;
            votosDE3.textContent = d[5].voto ;
            votosSE1.textContent = d[6].voto ;
            votosSE2.textContent = d[7].voto ;
            votosGO1.textContent = d[8].voto ;
            votosGO2.textContent = d[9].voto ;
            votosPR1.textContent = d[10].voto ;
            votosPR2.textContent = d[11].voto ;
            nulos1.textContent = d[12].voto ;
            nulos2.textContent = d[13].voto ;
            nulos3.textContent = d[14].voto ;
            nulos4.textContent = d[15].voto ;
            nulos5.textContent = d[16].voto ;
            branco1.textContent = d[17].voto ;
            branco2.textContent = d[18].voto ;
            branco3.textContent = d[19].voto ;
            branco4.textContent = d[20].voto ;
            branco5.textContent = d[21].voto ;
            console.log( d )
        });
}

function enviar(){

    console.log(votados[5])

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
        body: JSON.stringify( {depFed: votados[1] ,
                                depEst: votados[2],
                                senador: votados[3],
                                governador: votados[4],
                                presidente: votados[5]
                            } )
    });

}