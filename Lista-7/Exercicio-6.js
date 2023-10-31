let criaMatriz = (matriz) => {
    for (let i = 0; i < 20; i++) {
        matriz[i] = []
        for (let j = 0; j < 10; j++) {
            matriz[i][j] = Math.floor(Math.random() * (100 - 0 + 1)) + 0
        }
    }
}

let somaColuna = (matriz, vetorSomaColuna) => {
    let soma = 0
    for(let i=0; i<matriz.length; i++){
        for(let j=0; j<matriz[i].length; j++){
            soma += matriz[i][j]
        }
        vetorSomaColuna.push(soma)
        soma = 0
    }
    return vetorSomaColuna
}

let multiplicaPelaSoma = (matriz, vetorSomaColuna, matrizResultante) => {
    for(let i =0; i<matriz.length; i++){
        matrizResultante[i] = []
        for(let j=0; j<matriz[i].length; j++){
            matrizResultante[i][j] = matriz[i][j] * vetorSomaColuna[i]
        }
    }
    return matrizResultante
}

function main(){
    let matriz = []
    let vetorSomaColuna = []
    let matrizResultante = []
    criaMatriz(matriz)
    console.log(matriz)
    somaColuna(matriz, vetorSomaColuna)
    console.log(vetorSomaColuna)
    multiplicaPelaSoma(matriz, vetorSomaColuna, matrizResultante)
    console.log(matrizResultante)
}