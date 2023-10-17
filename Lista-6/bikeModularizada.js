function getBike(vetor){
    let objeto = {
            marca: prompt("Informe a marca da bike"),
            modelo: prompt("Informe o modelo da bike"),
            quadro: parseInt(prompt("Informe o tamanho do quadro da bike")),
            aro: parseInt(prompt("Informe o tamanho do aro da bike")),
            ano: parseInt(prompt("Informe o ano da bike")),
            preco: parseFloat(prompt("Informe o preço da bike"))
        }
    vetor.push(objeto) 
    console.log('Bike inserida com sucesso')

    return vetor
}

function media(vetor){
    // média de preço das bikes
    let soma = 0
    for(let i=0;i<vetor.lenght;i++){
        soma = soma + vetor[i].preco
    }   
    console.log(`Média de preço das bikes ${soma/vetor.length}`)
}

// bike(s) mais antiga(s)
function maisAntiga(vetor){
    let maisAntiga = []
    maisAntiga[0] = vetor[0] // atribui todo o objeto
    for(let i=1;i<vetor.lenght;i++){
        if (vetor[i].ano < maisAntiga[0].ano){
            maisAntiga = [] //   o vetor
            maisAntiga[0] = vetor[i]
        }
        else if (vetor[i].ano == maisAntiga[0].ano){
            maisAntiga.push(vetor[i]) // mais uma com o mesmo ano
        }
    }
    console.log(`Bike(s) mais antiga(s)`)
    console.log(maisAntiga)
}

function bikesCaloi(vetor){
    //bikes da marca Caloi
    let caloi = []
    for(let i=0;i<vetor.lenght;i++){
        if (vetor[i].marca == 'CALOI'){
            caloi.push(vetor[i])
        }
    }
    console.log(caloi)
}

function bikesAro29(vetor){
    // qts bikes aro 29
    let aro29 = 0
    for(let i=0;i<vetor.length;i++){
        if (vetor[i].aro == 29){
            aro29++
        }
    }
    console.log(`Quantidade de bikes aro 29 ${aro29}`)
}

function maiorQuadro(vetor){
    // qual bike possui maior quadro, desconsidere empates
    let maiorQuadro = vetor[0]
    for(let i=1;i<vetor.length;i++){
        if (vetor[i].quadro > maiorQuadro.quadro){
            maiorQuadro = vetor[i]
        }
    }
    console.log(maiorQuadro)
}

function funcaoPrincipal(){
    vetorBikes = []
    let option
    do{
        option = parseInt(prompt(`Digite uma opção: <br>Digite 1 para cadastrar uma bike nova;<br>Digite 2 para calcular a media de preço das bikes;
        <br>Digite 3 para ver qual a bike mais antiga no catalogo;<br>Digite 4 para ver as bikes da marca caloi;
        <br>Digite 5 para ver as bikes com aro 29; <br>Digite 6 para ver a bike com o maior quadro;
        <br>Digite 0 para sair.`))
        switch(option){
            case 1:
                getBike(vetorBikes);
                break
            case 2:
                if(vetorBikes.lenght == 0){
                    alert(`Opção inválida, nao existem bikes no banco de dados! Adicione pelo menos uma bike antes de utilizar as outras opções!`)
                    break
                }
                else{
                    media(vetorBikes);
                    break
                }
            case 3:
                if(vetorBikes.lenght == 0){
                    alert(`Opção inválida, nao existem bikes no banco de dados! Adicione pelo menos uma bike antes de utilizar as outras opções!`)
                    break
                }
                else{
                    maisAntiga(vetorBikes);
                    break
                }
            case 4:
                if(vetorBikes.lenght == 0){
                    alert(`Opção inválida, nao existem bikes no banco de dados! Adicione pelo menos uma bike antes de utilizar as outras opções!`)
                    break
                }
                else{
                    bikesCaloi(vetorBikes);
                    break
                }
            case 5:
                if(vetorBikes.lenght == 0){
                    alert(`Opção inválida, nao existem bikes no banco de dados! Adicione pelo menos uma bike antes de utilizar as outras opções!`)
                    break
                }
                else{
                    bikesAro29(vetorBikes);
                    break
                }
            case 6:
                if(vetorBikes.lenght == 0){
                    alert(`Opção inválida, nao existem bikes no banco de dados! Adicione pelo menos uma bike antes de utilizar as outras opções!`)
                    break
                }
                else{
                    maiorQuadro(vetorBikes);
                    break
                }
            default:
                alert(`Opção inválida!`)
                break
        }
    } while(option != 0)
}