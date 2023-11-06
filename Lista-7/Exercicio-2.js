function main() {
    let matriz = []
    criaMatriz(matriz)
    mostraMatriz(matriz)
    let vetorLinhas = checaLinhas(matriz)
    mostraLinhas(vetorLinhas)
    mediaPares(matriz)
}

let mostraLinhas = (vetorLinhas) => {
    for (let i = 0; i < vetorLinhas.length; i++) {
        console.log(`Existem ${vetorLinhas[i]} números entre 12 e 20 na linha ${i + 1}.`)
    }
}

let criaMatriz = (matriz) => {
    for (let i = 0; i < 2; i++) {
        matriz[i] = []
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = Math.floor(Math.random() * (20 - 10 + 1)) + 10
        }
    }
}

let mostraMatriz = (matriz) => {
    console.log(matriz)
}

let checaLinhas = (matriz) => {
    let vetorLinhas = []
    let totalNumeros = 0
    for (let i = 0; i < matriz.length; i++) {
        totalNumeros = 0
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] >= 12 && matriz[i][j] <= 20) {
                totalNumeros++
            }
        }
        vetorLinhas.push(totalNumeros)
    }
    return vetorLinhas
}

let mediaPares = (matriz) => {
    let qtdePar = 0
    let pares = 0
    let media = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 2 == 0) {
                qtdePar++
                pares += matriz[i][j]
            }
        }
    }
    if (qtdePar == 0) {
        console.log(`Não há números pares!`)
    }
    else {
        media = pares / qtdePar
        console.log(`A média dos números pares é: ${media}`)
    }
}