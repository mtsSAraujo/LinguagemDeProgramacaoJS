function trocaNum(){
    let a = 20;
    let b = 30;
    let c = 5;
    let d = 2;

    let vetor = [a,b,c,d];
    
    vetor.sort(function(a, b){return a - b});

    console.log(`Ordem crescente: ${vetor}`);
}