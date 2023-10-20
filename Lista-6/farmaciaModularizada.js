function cadastraFarmacia(vetorFarmacias) {
    let farmacia = {
        codigo: Number(prompt(`Insira o codigo da farmacia: `)),
        nome: prompt(`Digite o nome da farmacia: `).toLowerCase().toString(),
        endereco: prompt(`Digite o endereço: `).toLowerCase().toString()
    }
    for (let j = 0; j < vetorFarmacias.length; j++) {
        if (farmacia.codigo == vetorFarmacias[j].codigo) {
            alert(`Código ja encontrado no sistema!`)
            while (farmacia.codigo == vetorFarmacias[j].codigo) {
                farmacia.codigo = Number(prompt(`Insira o codigo da farmacia: `))
            }
        }
    }
    vetorFarmacias.push(farmacia)
    console.log("farmacia cadastrada com sucesso!")
}

function cadastraRemedio(vetorFarmacias, vetorRemedios) {
    console.log(vetorFarmacias)
    let remedio = {
        codigoFarmacia: Number(prompt(`Insira o código da farmacia: `)),
        nomeRemedio: prompt(`Insira o nome do remédio: `).toString().toLowerCase(),
        estoque: Number(prompt(`Insira a quantidade do remédio em estoque: `)),
        preco: Number(prompt(`Digite o preço do remédio: `))
    }
    while (!vetorFarmacias.some((item) => item.codigo == remedio.codigoFarmacia)) {
        remedio.codigoFarmacia = Number(prompt(`Insira um código de farmacia valido!`))
    }
    vetorRemedios.push(remedio)

}

//solução do professor
function compraRemedio(vetorRemedios) {
    console.log(vetorRemedios)
    let compra = {
        codigoFarmacia: Number(prompt(`Digite o código da farmacia: `)),
        nomeCompra: prompt(`Digite o nome do remédio a ser comprado: `).toLowerCase().toString(),
        qtdCompra: Number(prompt(`Digite a quantidade a ser comprada: `))
    }
    if (vetorRemedios.some((item) =>
        item.codigoFarmacia == compra.codigoFarmacia && item.nomeRemedio == compra.nomeCompra)) {
        let index = vetorRemedios.findIndex((item) =>
            item.codigoFarmacia == compra.codigoFarmacia && item.nomeRemedio == compra.nomeCompra)
        if (vetorRemedios[index].estoque - compra.qtdCompra < 0) {
            alert(`Quantidade excede disponibilidade do estoque!`)
        }
        else {
            vetorRemedios[index].estoque = vetorRemedios[index].estoque - compra.qtdCompra
            console.log(`Compra efetuada com sucesso`)
        }
    }
    else {
        alert(`Compra cancelada! Farmacia ou nome inexistentes!`)
    }

}


function main() {
    let vetorFarmacias = []
    let vetorRemedios = []
    let opcao
    do {
        opcao = Number(prompt("Digite uma opção: \n1 - Cadastrar farmacia; \n2 - Cadastrar remedio; \n3 - Comprar remedio; \n0 - Sair do programa"))
        switch (opcao) {
            case 1: cadastraFarmacia(vetorFarmacias)
                break

            case 2: cadastraRemedio(vetorFarmacias, vetorRemedios)
                break

            case 3: compraRemedio(vetorRemedios)
                break

            case 0: break

            default: console.log("Opção digitada invalida! Digite uma opção valida!")
                break

        }
    } while (opcao != 0)
}