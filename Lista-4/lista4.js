function ex1(){
    let vetor = []
    let vetorPar = []
    let vetorImpar = []

    for(let i =0; i<6; i++){
        vetor.push(Number(prompt(`Digite o valor do ${i+1}° número: `)))
    }
    
    for(i = 0; i<vetor.length; i++){
        if(vetor[i] % 2 == 0){
            vetorPar.push(vetor[i])
        }
        else{
            vetorImpar.push(vetor[i])
        }
    }
    let message = `Os número pares são: ${vetorPar}, totalizando ${vetorPar.length}\nOs números impares são: ${vetorImpar}, totalizando ${vetorImpar.length}`
    console.log(message)
}

function ex2(){

    let vetor = []
    let m2 = []
    let m3 = []
    let m2Em3 = []

    for(let i =0; i<7; i++){
        vetor.push(Number(prompt(`Digite o valor do ${i+1}° número: `)))
    }

    for(i = 0; i<vetor.length; i++){
        if(vetor[i] % 2 == 0){
            m2.push(vetor[i])
            if(vetor[i] % 3 == 0){
                m2Em3.push(vetor[i])
            }
        }
        if(vetor[i] % 3 == 0){
            m3.push(vetor[i])
        }
    }
    let message = `Multiplos de 2: ${m2} \nMultiplos de 3: ${m3} \nMultiplos de 2 e 3: ${m2Em3}`
    console.log(message)
}

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

function ex4(){
    let vetor = []
    let posicao = []
    for(let i = 0; i<15; i++){
        vetor.push(Number(prompt(`Digite o ${i+1}° número: `)))
    }
    for(i = 0; i<vetor.length; i++){
        if(vetor[i] == 30){
            posicao.push(i)
        }
    }
    let message = `As posições que o número 30 aparecem são: ${posicao} (índice do vetor)`
    console.log(message)
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
            console.log(`Aluno matriculado em ambas: ${logica[i]}`)
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

function ex7(){
    let vetor = []
    let somaPositivo = 0;
    let qtdeNegativo = 0;
    for(let i = 0; i<10; i++){
        vetor.push(Number(prompt(`Digite o ${i+1}° número: `)))
    }

    for(let i = 0; i<vetor.length; i++){
        if(vetor[i] <0){
            qtdeNegativo ++
        }
        else{
            somaPositivo += vetor[i]
        }
    }

    let message = `A soma dos positivos é: ${somaPositivo} \nA quantidade de número negativos é: ${qtdeNegativo}`
    message += `\nVetor inicial gerado: ${vetor}`
    console.log(message)
}

function ex8(){
    let media = []
    let alunos = []
    let reprovados = []
    let notaNecessaria = []

    for(let i =0; i<7; i++){
        alunos.push(prompt(`Digite o nome do ${i+1}° aluno: `))
        media.push(Number(prompt(`Digite a média do aluno ${alunos[i]}: `)))
    }
    let maiorMedia = media[0]

    for(i=1; i<media.length;i++){
        if(media[i] > maiorMedia){
            maiorMedia = media[i]
        }
    }
    let message = `O aluno com a maior média é: ${alunos[media.indexOf(maiorMedia)]} \n`

    for(i=0; i<media.length; i++){
        if(media[i] < 7){
            reprovados.push(media[i])
        }
        else{
            reprovados.push(-1)
        }
    }

    for(i=0; i<media.length;i++){
        if(reprovados[i] >=0 && reprovados[i] <=2){
            notaNecessaria.push(5)
        }
        else if(reprovados[i] > 2){
            notaNecessaria.push(7 - reprovados[i])
        }
        else{
            notaNecessaria.push(-1)
        }
    }

    message += `Nome dos alunos reprovados e suas notas:\n`
    for(i=0; i<media.length; i++){
        if(reprovados[i] != -1)
            message += `Aluno: ${alunos[i]} Nota: ${media[i]} Nota Necessária: ${notaNecessaria[i]}\n`
    }
    console.log(message)

}