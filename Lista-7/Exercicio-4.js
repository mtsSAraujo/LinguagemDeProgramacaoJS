let criaMatriz = (matriz) => {
    for (let i = 0; i < 15; i++) {
        matriz[i] = []
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Math.floor(Math.random() * (10 - 0 + 1)) + 0
        }
    }
}

let criaVetorAlunos = (vetorAlunos) => {
    for(let i=0; i<15; i++){
        vetorAlunos[i] = `Aluno ${i+1}`
    }
}

let fazMediaAluno = (matriz, vetorAlunos, matrizMedia) => {
    let media = 0
    let soma = 0
    for(let i=0; i<matriz.length; i++){
        matrizMedia[i] = []
        for(let j=0; j<matriz[i].length ; j++){
            soma += matriz[i][j]
        }
        media = Number((soma / 5).toFixed(1))
        soma = 0
        matrizMedia[i][0] = (vetorAlunos[i])
        matrizMedia[i][1] = (media)
        if(media>=6){
            matrizMedia[i][2] = `Aprovado`
        }
        else if(media>=3 && media<6){
            matrizMedia[i][2] = `Exame`
        }
        else{
            matrizMedia[i][2] = `Reprovado`
        }
    }
}

let fazMediaClasse = (vetorMedia) => {
    let soma = 0
    let media = 0
    for(let i=0; i<vetorMedia.length; i++){
        soma += vetorMedia[i][1]
    }
    media = (soma/vetorMedia.length).toFixed(1)
    return media
}

let mostraMatrizMedia = (matrizMedia) => {
    for(let i=0; i<matrizMedia.length; i++){
        console.log(`Aluno: ${matrizMedia[i][0]}, Média: ${matrizMedia[i][1]}, Situação: ${matrizMedia[i][2]}`)
    }
}

function main() {
    let matriz = []
    let vetorAlunos = []
    let matrizMedia = []
    criaMatriz(matriz)
    criaVetorAlunos(vetorAlunos)
    fazMediaAluno(matriz, vetorAlunos, matrizMedia)
    console.log(matriz)
    mostraMatrizMedia(matrizMedia)
    console.log(`Média da classe: ${fazMediaClasse(matrizMedia)}`)
}