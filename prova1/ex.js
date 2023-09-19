function prova(){
    let modelo = []
    let modeloInicial;
    let estoque = []
    let clas = []
    let quantidade = 0;
    let classificacao;
    let produtos = []
    for(let i = 0; i<10; i++){
        modeloInicial = prompt(`Digite o modelo do ${i+1}° computador:`)
        modeloInicial = String(modeloInicial)
        modeloInicial.toLowerCase
        if(modelo.includes(modeloInicial)){
            alert(`Modelo ja está presente no estoque, informe um modelo válido!`)
            do{
                modeloInicial = prompt(`Digite o modelo do ${i+1}° computador:`)
                modeloInicial = String(modeloInicial)
                modeloInicial.toLowerCase
            }while(modelo.includes(modeloInicial))
            modelo.push(modeloInicial)
        }
        else{
            modelo.push(modeloInicial)
        }
        do{
            quantidade = Number(prompt(`Digite a quantidade do modelo ${modelo[i]} em estoque: `))
        }while(quantidade<0)
        estoque.push(quantidade)
        do{
            classificacao = String(prompt(`Digite a classificação do modelo (${modelo[i]}): \n Classificações disponiveis: \nGamer; \nNotebook; \nDesktop`))
            classificacao.toLowerCase;
        }while(classificacao != "gamer" && classificacao != "desktop" && classificacao != "notebook")
        clas.push(classificacao)
        produtos.push(`Modelo: ${modelo[i]} Estoque: ${estoque[i]} Classificação: ${clas[i]}`)
    }
    console.log(produtos)
    let escolha = null;
    do{
        escolha = Number(prompt(`Deseja realizar a operação de 4 compras? \n1 - Sim; \n2 - Não`))
    }while(escolha != 1 && escolha != 2)
    let notebookMaior = null;
    let indexMaior = null;
    let indexMenor = null;
    let notebookMenor = null;
    let flag = true;
    for(i = 0; i< 10; i++){
        if(clas[i] == "notebook"){
            if(flag == true){
                notebookMaior = estoque[i]
                notebookMenor = estoque[i]
                indexMaior = i
                indexMenor = i
                flag = false
            }
            else{
                if(notebookMaior < estoque[i]){
                    notebookMaior = estoque[i]
                    indexMaior = i
                }
                if(notebookMenor > estoque[i]){
                    notebookMenor = estoque[i]
                    indexMenor = i
                }
            }
        }
    }
    if(escolha == 1){
        let modeloCompra;
        let qtdeCompra = 0;
        let clasCompra;
        let listaCompras = []
        for(i = 0; i<4; i++){
            modeloCompra = String(prompt(`Digite o modelo que deseja comprar: `))
            modeloCompra.toLowerCase
            if(!modelo.includes(modeloCompra)){
                alert("Modelo não existe, compra cancelada")
            }
            else{
                qtdeCompra = Number(prompt(`Digite a quantidade que deseja comprar:`))
                if(qtdeCompra <= 0 || qtdeCompra > estoque[modelo.indexOf(modeloCompra)]){
                    alert("Quantidade maior que a disponivel no estoque ou menor do que 0. \nCompra cancelada!")
                }
                else{
                    estoque[modelo.indexOf(modeloCompra)] = estoque[modelo.indexOf(modeloCompra)] - qtdeCompra
                    do{
                        clasCompra = String(prompt(`Digite a classificação do modelo (${modelo[i]}): \n Classificações disponiveis: \nGamer; \nNotebook; \nDesktop`))
                        clasCompra.toLowerCase
                    }while(clasCompra != "gamer" && clasCompra != "desktop" && clasCompra != "notebook")
                    alert(`Compra confirmada com sucesso!`)
                    listaCompras.push(`Modelo: ${modeloCompra} Quantidade: ${qtdeCompra} Classificação: ${clasCompra}`)
                }
            }
        }
        let message = `Obrigado pela atenção!\n
        Modelo do nootbook com maior valor em estoque: ${modelo[indexMaior]}\n
        Modelo do nootbook com menor valor em estoque: ${modelo[indexMenor]}\n
        Lista de produtos comprados: \n${listaCompras}`
        alert(message)
        console.log(message)
    }
    else{
        let message2 = `Obrigado pela atenção! \n
        Modelo do nootbook com maior valor em estoque: ${modelo[indexMaior]}\n
        Modelo do nootbook com menor valor em estoque: ${modelo[indexMenor]}`
        alert(message2)
        console.log(message2)
    }
}