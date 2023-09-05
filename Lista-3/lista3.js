function ex1(){

    let contador2 = 1;
    while(contador2 <= 5){
        let a = Number(prompt(`Informe A`));
        let b = Number(prompt(`Informe B`));
        let c = Number(prompt(`Informe C`));
        let d = Number(prompt(`Informe D`));
        let aux = 0;

        let contador = 1;

        while(contador <=3){
            if(a > b){
                aux = a;
                a = b;
                b = aux;
            }
            if(b > c){
                aux = b;
                b = c;
                c = aux;
            }
            if(c > d){
                aux = c;
                c = d;
                d = aux;
            }
            contador ++;

        }
        console.log(`Ordem crescente: ${a}, ${b}, ${c}, ${d}`);
        console.log(`Ordem decrescente: ${d}, ${c}, ${b}, ${a}`);
        contador2 ++;
    }

}

function ex2(){
    let preco = 5;
    let ingressos = 120;
    const despesas = 200;
    let lucro = (preco * ingressos) - despesas;
    let corpo = '';
    let maiorLucro = lucro;
    let melhorQuantidade = ingressos;
    let melhorPreco = preco;

    while(preco>=1){

        if(preco == 5){
            corpo = `<tr><td>${preco}</td> <td>${ingressos} </td> <td> ${despesas}</td> <td> ${lucro} </td> </tr>`
        }
        else{
            corpo = corpo + `<tr><td>${preco}</td> <td>${ingressos} </td> <td> ${despesas}</td> <td> ${lucro} </td> </tr>`
        }
        if(maiorLucro < lucro){
            maiorLucro = lucro;
            melhorQuantidade = ingressos;
            melhorPreco = preco;
        }
        preco = preco - 0.5;
        ingressos = ingressos + 26;
        lucro = (preco * ingressos) - despesas;
    }
    corpo = corpo + `<tr><td> Melhor </td> <td> Cenário </td> <td> Possivel </td> <td></td> </tr>`
    corpo = corpo + `<tr><td>${melhorPreco}</td> <td>${melhorQuantidade} </td> <td> ${despesas}</td> <td> ${maiorLucro} </td> </tr>`
    document.getElementById("corpo").innerHTML = corpo;
}

function ex4(){
    let number = Number(document.getElementById("ex4n1").value);
    let resultado = 0;
    let corpo = '';
    for(let i = 0; i<=10; i++){
        resultado = number * i;
        corpo = corpo + `<tr> <td> ${number} </td> <td> ${i}</td> <td> ${resultado}</td></tr>`
    }
    document.getElementById("corpo").innerHTML = corpo;
}

function ex5(){
    let resultado = 0;
    let corpo = '';
    for(let i = 1; i <=10; i++){
        corpo = corpo + `<tr> <td> Tabuada </td> <td> Do </td> <td> ${i} </td></tr>`
        for(let j = 1; j <=10; j++){
            resultado = i * j;
            corpo = corpo + `<tr> <td> ${i}</td> <td> ${j}</td> <td> ${resultado}</td></tr>`
        }
    }
    document.getElementById("corpo").innerHTML = corpo;
}