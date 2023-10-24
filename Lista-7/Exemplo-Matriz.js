let lerMatriz = (matriz) => {
    let linhas = Number(prompt(`Informe o número de linhas da matriz: `))
    let colunas = Number(prompt(`Informe o número de colunas da matriz: `))
    for(let i = 0; i <linhas; i++){
        matriz[i] = []
        for(let j=0; j<colunas; j++){
            matriz[i][j] = Number(prompt(`Informe um número da coluna ${j+1}:`))
        }
    }
}

let mostraMatriz = (matriz) => {
    console.log(matriz)
}

function main(){
    let matriz = []
    lerMatriz(matriz)
    mostraMatriz(matriz)
}