function bike(){
    let vetorBicicletas = []
    for(let i = 0; i<10; i++){
        let bike = {
            marca: prompt("Digite a marca da bicicleta: ").toLowerCase(),
            modelo: prompt("Digite o modelo da bicicleta: ").toLowerCase(),
            quadro: Number(prompt("Digite o quadro da bicicleta: ")),
            aro: Number(prompt("Digite o aro da bicicleta: ")),
            ano: Number(prompt("Digite o ano que foi feita: ")),
            preco: Number(prompt("Digite o preço da bicicleta: "))
        }
        vetorBicicletas.push(bike);
    }

    let soma = 0;
    let media = 0;
    let antiga = Infinity;
    let vetorAntigas = []
    let aro29 = 0;
    let vetorCaloi = []
    let maiorQuadro = 0;
    let posicaoMaiorQuadro = 0;
    for(i=0;i<10;i++){
        soma += vetorBicicletas[i].preco
        if(antiga < vetorBicicletas[i].ano){
            antiga = vetorBicicletas[i].ano
        }
        if(vetorBicicletas[i].marca === "caloi"){
            vetorCaloi.push(i)
        }
        if(vetorBicicletas[i].aro == 29){
            aro29 ++
        }
        if(vetorBicicletas[i].quadro > maiorQuadro){
            maiorQuadro = quadro
            posicaoMaiorQuadro = i
        }
    }

    for(i=0;i<10;i++){
        if(vetorBicicletas[i].ano == antiga){
            vetorAntigas.push(vetorBicicletas[i])
        }
    }
    if(soma != 0){
        media = soma/10
    }

    console.log("A média de preço das bikes é: \nR$" + media)
    console.log("As bikes mais antigas são: \n"+ vetorAntigas)
    console.log("As bikes da marca caloi sao as de posição: \n" + vetorCaloi)
    console.log(aro29 + " bikes possuem aro 29")
    console.log("A bike " + vetorBicicletas[posicaoMaiorQuadro] + " possui o maior quadro")
}