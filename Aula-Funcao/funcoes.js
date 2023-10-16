function soma(a, b){
    return a+b
}
function soma2(a,b){
    console.log(a+b)
}
function alteraVetor(vet){
    vet[0] = vet[0] + 10
    vet[1] = vet[1] + 10
    vet[2] = vet[2] + 10
    console.log(`Dentro da função: ${vet}`)
}
function principal(){
    //soma2(4,8);
    //console.log(soma(4,8));

    // passagem de parametro por referencia --> vetor, objeto, matriz --> tudo passagem por referencia
    
    let vet = []
    vet[0] =10; vet[1] = 11; vet[2] = 12;
    alteraVetor(vet)
    console.log(`Fora da função: ${vet}`)
}