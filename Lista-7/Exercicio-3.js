let criaMatriz = (matriz) => {
    for (let i = 0; i < 6; i++) {
        matriz[i] = []
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * (100 - 0 + 1)) + 0
        }
    }
}

let achaMaior = (matriz, vetorMaior) => {
    let maior = matriz[0][0]
    let linhaMaior = 0
    let colunaMaior = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j]
                linhaMaior = i
                colunaMaior = j
            }
        }
    }
    vetorMaior.push(maior)
    vetorMaior.push(linhaMaior)
    vetorMaior.push(colunaMaior)
    return vetorMaior
}

let achaMenor = (matriz, vetorMenor) => {
    let menor = matriz[0][0]
    let linhaMenor = 0
    let colunaMenor = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < menor) {
                menor = matriz[i][j]
                linhaMenor = i
                colunaMenor = j
            }
        }
    }
    vetorMenor.push(menor)
    vetorMenor.push(linhaMenor)
    vetorMenor.push(colunaMenor)
    return vetorMenor
}

function principal(){
    let matriz = []
    let vetorMaior = []
    let vetorMenor = []
    criaMatriz(matriz)
    achaMaior(matriz, vetorMaior)
    achaMenor(matriz, vetorMenor)
    console.log(matriz)
    console.log(`O maior número é ${vetorMaior[0]}, na linha ${vetorMaior[1] + 1} e coluna ${vetorMaior[2] + 1}.`)
    console.log(`O menor número é ${vetorMenor[0]}, na linha ${vetorMenor[1] + 1} e coluna ${vetorMenor[2] + 1}.`)
}