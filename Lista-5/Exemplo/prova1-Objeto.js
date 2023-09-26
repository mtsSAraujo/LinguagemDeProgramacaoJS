function prova(){
    let vetor = []
    for(let i =0; i<3; i++){
        let objeto={
            nome: prompt("Digite o nome do computador: ").toLowerCase(),
            estoque: Number(prompt("Digite a quantidade do computador em estoque: ")),
            classificacao: prompt("Infome a classificação do computador: \n (Gamer, Desktop ou Notebook)").toLowerCase()
        }
        while(objeto.estoque < 0){
            alert("Valor do produto em estoque menor que 0!")
            objeto.estoque = Number(prompt("Digite a quantidade do computador em estoque: "))
        }
        while(objeto.classificacao != "gamer" && objeto.classificacao != "desktop" && objeto.classificacao != "notebook"){
            alert("Digite uma classificação válida para o modelo informado!")
            objeto.classificacao = prompt("Infome a classificação do computador: \n (Gamer, Desktop ou Notebook)").toLowerCase()
        }
        vetor.push(objeto)
    }

    for(i = 0; i< 4; i++){
        let objetoCompra={
            nomeCompra: prompt("Digite o nome do computador: ").toLowerCase(),
            estoqueCompra: Number(prompt("Digite a quantidade do computador em estoque: ")),
            classificacaoCompra: prompt("Infome a classificação do computador: \n (Gamer, Desktop ou Notebook)").toLowerCase()
        }
        let achou = false
        for(let j = 0; j<3; j ++){
            if(objetoCompra.nomeCompra == vetor[j].nome && objetoCompra.classificacaoCompra === vetor[j].classificacao){
                achou = true
                if(objetoCompra.estoqueCompra <= vetor[j].estoque){
                    console.log("Venda realizada com sucesso!")
                    vetor[j].estoque = vetor[j].estoque - objetoCompra.estoqueCompra
                }
                else{
                    console.log("Não há estoque suficiente")
                }
            }
        }
        if(!achou){
            console.log("Venda nao realizada, nome ou classificação digitadas nao existem no banco.")
        }
    }
}