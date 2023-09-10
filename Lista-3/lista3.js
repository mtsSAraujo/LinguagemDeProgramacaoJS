function ex1(){

    let contador2 = 1;
    let resposta = "";
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
        resposta += `Ordem crescente: ${a}, ${b}, ${c}, ${d} <br>
        Ordem decrescente: ${d}, ${c}, ${b}, ${a} <br>`
        contador2 ++;
    }
    document.getElementById("resposta").innerHTML = `Valores: ${resposta}`;

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

function ex3(){
    let resposta = "";
    let faixa1 = 0;
    let faixa2 = 0;
    let faixa3 = 0;
    let faixa4 = 0;
    let faixa5 = 0;
    let flag = 1;
    let porcentagem1 = 0;
    let porcentagem2 = 0;

    for(let i = 1; i<=8; i++){
        let number = Number(prompt(`Informe a ${i}° idade: `));

        if(number > 0 && number <= 15){
            faixa1 ++;
        }
        else if(number > 15 && number <=30){
            faixa2 ++;
        }
        else if(number > 30 && number <= 45){
            faixa3 ++;
        }
        else if(number >35 && number <= 60){
            faixa4 ++;
        }
        else if(number>60){
            faixa5 ++;
        }
        else{
            resposta = `Valor informado invalido!`;
            flag = 0;
            break;
        }
    }

    if (flag == 1){
        resposta = `Pessoas por faixa etária: <br> Faixa 1: ${faixa1} <br>
        Faixa 2: ${faixa2} <br> Faixa 3: ${faixa3} <br>
        Faixa 4: ${faixa4} <br> Faixa 5: ${faixa5} <br>`
        porcentagem1 = faixa1/8 * 100;
        porcentagem2 = faixa5/8 * 100;
        resposta += `Porcentagem de pessoas na primeira faixa etária: ${porcentagem1}% <br>
        Porcentagem de pessoas na última faixa etária: ${porcentagem2}%`
    }
    document.getElementById("resposta").innerHTML = resposta;
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