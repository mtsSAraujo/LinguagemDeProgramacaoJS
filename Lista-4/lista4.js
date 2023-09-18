function ex3(){
    let codigos = []
    let estoque = []
    //entrada de dados
    for(let i =0; i<10; i++){
        codigos.push(Number(prompt(`Informe o código do produto ${i+1}`)))
        estoque.push(Number(prompt(`Informe a quantidade do produto ${i+1} em estoque`)))
    }
    let cliente = Number(prompt(`Informe o código do cliente que deseja comprar`))
    do{
        // compra por um cliente
        let produto = Number(prompt(`Informe o código do produto que deseja comprar`))
        let qtde = Number(prompt(`Informe a quantidade que deseja comprar`))
        // verificando se o produto existe e se tem estoque
        let achou = false
        for(let i =0; i<10; i++){
            if(codigos[i] == produto){
                achou = true
                if(estoque[i] >= qtde){
                    alert(`Venda realizada com sucesso`)
                    estoque[i] = estoque[i] - qtde
                }
                else{
                    alert(`Não há produto suficiente em estoque`)
                }
            }
        }
        if(!achou){ //não encontrou o produto
            alert(`Produto não encontrado`)
        }
        cliente = Number(prompt(`Informe o código do novo cliente ou 0 para encerrar`))
    } while(cliente != 0)

    let mensagem = ""
    for(let i =0; i<10; i++){
        mensagem += `Produto ${i+1} = ${codigos[i]} Estoque = ${estoque[i]} \n`
    }
    console.log(mensagem)
}
function ex5(){
    let logica = []
    let prog = []
    for(let i =0; i<15; i++){
        logica.push(Number(prompt(`Digite o ID do aluno cursando logica`)))
    }
    for(let i = 0; i<10; i++){
        prog.push(Number(prompt(`Digite o ID do aluno cursando programação`)))
    }

    for(let i =0; i<logica.length; i++){
        if(prog.includes(logica[i])){
            console.log(logica[i])
        }
    }
}

function ex6(){
    let vendas = []
    let percentuais = []
    let nomes = []
    let receber = []

    for(let i = 0; i<10; i++){
        nomes.push(`Informe o nome do vendedor ${i+1}`)
        vendas.push(Number(prompt(`Informe o total de vendas do vendedor ${i+1}`)))
        percentuais.push(Number(prompt(`Informe o percentual de comissão do vendedor ${i+1} (%)`)))
    }

    let comissoes =[]
    for(let i=0; i<10; i++){
        comissoes.push(vendas[i] * percentuais[i]/100)
        console.log(`${nomes[i]} vai receber ${comissoes[i]}`)
    }
    // total de vendas de todos os vendedores
    let total = 0
    for(let i =0; i<10; i++){
        total += vendas[i]
    }
    console.log(`Total de vendas = ${total}`)
    let maior = comissoes[0]
    let menor = comissoes[0]
    let nomeMaior = nomes[0]
    let nomeMenor = nomes[0]
    for(let i =1; i<10; i++){
        if (maior < comissoes[i]){
            maior = comissoes[i]
            nomeMaior = nomes[i]
        }
        if(menor > comissoes[i]){
            menor = comissoes[i]
            nomeMenor = nomes[i]
        }
    }
    console.log(`a maior comissão no valor de ${maior} foi recebida pelo vendedor ${nomeMaior}`)
    console.log(`a menor comissão no valor de ${menor} foi recebida pelo vendedor ${nomeMenor}`)

}