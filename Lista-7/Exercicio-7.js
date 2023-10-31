let criaMatriz4por6 = (matriz) => {
    for (let i = 0; i < 4; i++) {
        matriz[i] = []
        for (let j = 0; j < 6; j++) {
            matriz[i][j] = Math.floor(Math.random() * (100 - 0 + 1)) + 0
        }
    }
}

let criaMatriz6por4 = (matriz) => {
    for (let i = 0; i < 6; i++) {
        matriz[i] = []
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = Math.floor(Math.random() * (100 - 0 + 1)) + 0
        }
    }
}

let somaLinhasComColunas = (matriz4por6, matriz6por4, matrizResultante) => {
    let soma = 0
    let vetor = []
    for(let i=0; i<matriz4por6.length; i++){
        matrizResultante[i] = []
        for(let j = 0; j<matriz6por4[0].length; j++){
            for(let k=0; k<matriz4por6[0].length; k++){
                vetor.push(matriz4por6[j][k] + matriz6por4[k][j])
            }
            matrizResultante[i][j] = vetor
            vetor = []
        }
    }
    return matrizResultante
}

function main(){
    let matriz4por6 = []
    let matriz6por4 = []
    let matrizResultante = []
    criaMatriz4por6(matriz4por6)
    criaMatriz6por4(matriz6por4)
    somaLinhasComColunas(matriz4por6, matriz6por4, matrizResultante)
    console.log(matriz4por6)
    console.log(matriz6por4)
    console.log(matrizResultante)
}