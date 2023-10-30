let criaMatriz = (matriz) => {
    for (let i = 0; i < 12; i++) {
        matriz[i] = []
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = Math.floor(Math.random() * (15000 - 10000 + 1)) + 10000 // Valores de venda da loja
        }
    }
}

let criaVetorMeses = (vetorMeses) => {
    vetorMeses[0] = "Janeiro"
    vetorMeses[1] = "Fevereiro"
    vetorMeses[2] = "Março"
    vetorMeses[3] = "Abril"
    vetorMeses[4] = "Maio"
    vetorMeses[5] = "Junho"
    vetorMeses[6] = "Julho"
    vetorMeses[7] = "Agosto"
    vetorMeses[8] = "Setembro"
    vetorMeses[9] = "Outubro"
    vetorMeses[10] = "Novembro"
    vetorMeses[11] = "Dezembro"
}

let vendasMes = (matriz, vetorMeses, matrizVendasMes) => {
    let soma = 0
    for(let i=0; i<matriz.length; i++){
        matrizVendasMes[i] = []
        for(let j=0; j<matriz[i].length; j++){
            soma += matriz[i][j]
        }
        matrizVendasMes[i][0] = vetorMeses[i]
        matrizVendasMes[i][1] = soma
        soma = 0
    }
}

let vendasSemana = (matriz, vetorVendasSemana) => {
    soma = 0
    for(let j = 0; j<matriz[0].length; j++){
        for(let i = 0; i<matriz.length; i++){
            soma += matriz[i][j]
        }
        vetorVendasSemana[j] = soma
        soma = 0
    }
}

let vendasTotal = (matrizVendasMes) => {
    let soma = 0
    for(let i=0; i<matrizVendasMes.length; i++){
        soma += matrizVendasMes[i][1]
    }
    return soma
}

let mostraMatrizVendas = (matrizVendasMes) => {
    for(let i=0; i<matrizVendasMes.length; i++){
        console.log(`Mês: ${matrizVendasMes[i][0]}, Vendas: ${matrizVendasMes[i][1]}`)
    }
}
let mostraVetorSemana = (vetorVendasSemana) => {
    for(let i=0; i<vetorVendasSemana.length; i++){
        console.log(`Semana ${i+1}: ${vetorVendasSemana[i]}`)
    }
}

function main(){
    let matriz = []
    let vetorMeses = []
    let matrizVendasMes = []
    let vetorVendasSemana = []
    criaMatriz(matriz)
    criaVetorMeses(vetorMeses)
    vendasMes(matriz, vetorMeses, matrizVendasMes)
    vendasSemana(matriz, vetorVendasSemana)
    console.log(matriz)
    mostraMatrizVendas(matrizVendasMes)
    mostraVetorSemana(vetorVendasSemana)
    console.log(`Vendas totais: ${vendasTotal(matrizVendasMes)}`)
}