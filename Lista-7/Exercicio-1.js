function main(){
    let matriz = []
    criaMatriz(matriz)
    mostraMatriz(matriz)
    checaNumeros(matriz)
}

let criaMatriz = (matriz) => {
    for(let i =0; i<3; i++){
        matriz[i] = []
        for(let j=0; j<5;j++){
            matriz[i][j] = Math.floor(Math.random() * (20 - 10 +1)) + 10
        }
    }
}

let mostraMatriz = (matriz) => {
    console.log(matriz)
}

let checaNumeros = (matriz) => {
    let contaNumeros = 0
    for(let i =0; i < matriz.length; i++){
        for(let j = 0; j< matriz[i].length; j++){
            if(matriz[i][j] >= 15 && matriz[i][j] <= 20){
                contaNumeros ++
            }
        }
    }
    console.log(`Existem ${contaNumeros} números entre 15 e 20!`)
}