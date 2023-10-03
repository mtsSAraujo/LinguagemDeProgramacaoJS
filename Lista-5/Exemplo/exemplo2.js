function farmacia(){
    let vetorFarmacias = []
    for(let i=0;i<3; i++){
        let farmacia = {
            codigo: Number(prompt(`Insira o codigo da farmacia: `)),
            nome: prompt(`Digite o nome da farmacia: `).toLowerCase().toString(),
            endereco: prompt(`Digite o endereço: `).toLowerCase().toString()
        }
        for(let j =0; j<vetorFarmacias.length; j++){
            if(farmacia.codigo == vetorFarmacias[j].codigo){
                alert(`Código ja encontrado no sistema!`)
                while(farmacia.codigo == vetorFarmacias[j].codigo){
                    farmacia.codigo = Number(prompt(`Insira o codigo da farmacia: `))
                }
            }
        }
        vetorFarmacias.push(farmacia)
    }
    let vetorRemedios = []
    for(i=0; i<3; i++){
        let remedio = {
            codigoFarmacia: Number(prompt(`Insira o código da farmacia: `)),
            nomeRemedio: prompt(`Insira o nome do remédio: `).toString().toLowerCase(),
            estoque: Number(prompt(`Insira a quantidade do remédio em estoque: `)),
            preco: Number(prompt(`Digite o preço do remédio: `))
        }
        while(!vetorFarmacias.some((item) => item.codigo == remedio.codigoFarmacia)){
            remedio.codigoFarmacia = Number(prompt(`Insira um código de farmacia valido!`))
        }
        vetorRemedios.push(remedio)
    }
    
    for(i=0;i<5;i++){
        let indexCompra = 0;
        let compra = {
            codigoFarmacia: Number(prompt(`Digite o código da farmacia: `)),
            nomeCompra: prompt(`Digite o nome do remédio a ser comprado: `).toLowerCase().toString(),
            qtdCompra: Number(prompt(`Digite a quantidade a ser comprada: `))   
        }
        if(!vetorRemedios.some((item) => item.codigoFarmacia == compra.codigoFarmacia)){
            alert(`codigo da farmacia invalido, compra cancelada!`)
        }
        else if(!vetorRemedios.some((item) => item.nomeRemedio == compra.nomeCompra)){
            alert(`Nome do remédio nao existe. Compra cancelada!`)
        }
        for(j = 0; j < vetorRemedios.length; j ++){
            if(vetorRemedios[j].codigoFarmacia == compra.codigoFarmacia){
                indexCompra = j
            }
        }
        if(vetorRemedios[indexCompra].estoque - qtdCompra < 0){
            alert(`Quantidade excede disponibilidade do estoque!`)
        }
        else{
            vetorRemedios[indexCompra].estoque = vetorRemedios[indexCompra].estoque - qtdCompra
            console.log(`Compra efetuada com sucesso`)
        }
    }   
}