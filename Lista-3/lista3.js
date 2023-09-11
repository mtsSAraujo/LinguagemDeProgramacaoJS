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

function ex6(){

    let totalAVista = 0;
    let totalAPrazo = 0;
    let totalCompras = 0;
    let primeiraPrestacao = 0;
    let resposta = "";

    for (let i = 1; i <= 15; i++) {
        const codigo = prompt(`Transação ${i}: Código (V para à vista, P para a prazo):`);
        const valor = parseFloat(prompt(`Transação ${i}: Valor:`));

        if (codigo === "V" || codigo === "v") {
            totalAVista += valor;
        } 
        else if (codigo === "P" || codigo === "p") {
            totalAPrazo += valor;
        }
        totalCompras += valor;
    }
    primeiraPrestacao = totalAPrazo/3;
    primeiraPrestacao = primeiraPrestacao.toFixed(2);
    resposta = `Compras à vista: ${totalAVista} <br>
    Compras a prazo: ${totalAPrazo} <br>
    Total das compras: ${totalCompras} <br>
    Primeira prestação das compras a prazo: ${primeiraPrestacao}`
    document.getElementById("resposta").innerHTML = resposta;
}

function ex7(){

    let maior50 = 0;
    let alturaSoma = 0;
    let alturaMedia = 0;
    let alturaQuantidade = 0;
    let pesoMenor40 = 0;
    let porcentagemPeso = 0;
    let resposta = "";

    for(let i = 1; i<=5; i++){
        const idade = prompt(`Insira a idade da ${i}º pessoa: `);
        const peso = prompt(`Insira o peso da ${i}º pessoa: `);
        const altura = prompt(`Insira a altura da ${i}º pessoa (Use . como separador decimal): `);

        if(idade > 50){
            maior50 ++;
        }
        if(idade>=10 && idade<=20){
            alturaSoma += altura;
            alturaQuantidade ++;
        }
        if(peso < 40){
            pesoMenor40 ++
        }
    }
    if(alturaQuantidade != 0){
        alturaMedia = alturaSoma/alturaQuantidade;
    }

    porcentagemPeso = pesoMenor40/5 *100;

    resposta = `Pessoas com idade superior a 50 anos: ${maior50} <br>
    Média das alturas das pessoas entre 10 e 20 anos: ${alturaMedia} <br>
    Porcentagem de pessoas com peso inferior a 40Kg: ${porcentagemPeso}%`
    
    document.getElementById("resposta").innerHTML = resposta;
}

function ex8(){
    let idadeMaior50 = 0;
    let idadeSoma = 0;
    let idadeMedia = 0;
    let idadeQuantidade = 0;
    let olhoAzul = 0;
    let porcentagemOlhoAzul = 0;
    let ruivo = 0;
    let corDoCabelo, corDosOlhos


    for(let i = 1; i<=6; i++){
        const idade = prompt(`Insira a idade da ${i}º pessoa: `);
        if(idade === null){
            return;
        }
        const peso = prompt(`Insira o peso da ${i}º pessoa: `);
        if(peso === null){
            return;
        }
        const altura = prompt(`Insira a altura da ${i}º pessoa (Use . como separador decimal): `);
        if(altura === null){
            return;
        }
        do{
            corDosOlhos = prompt(`Insira uma opção para cor dos olhos(A - azul; P - preto; V - verde; C - castanho.): `).toUpperCase();
            corDosOlhos.toString();
        }
        while(corDosOlhos != "A" && corDosOlhos != "P" && corDosOlhos != "V" && corDosOlhos != "C");
        if(corDosOlhos === null){
            return;
        }
        do{
            corDoCabelo = prompt(`Insira uma opção para cor do cabelo(P - preto; C - castanho; L - louro; R - ruivo.):`).toUpperCase();
            corDoCabelo.toString();
        }
        while(corDoCabelo != "P" && corDoCabelo != "C" && corDoCabelo != "L" && corDoCabelo != "R");
        if(corDoCabelo === null){
            return;
        }

        if(idade > 50 && peso <60){
            idadeMaior50 ++;
        }
        if(altura < 1.50){
            idadeSoma += altura;
            idadeQuantidade ++;
        }
        if(corDosOlhos === "A" || corDosOlhos === "a"){
            olhoAzul ++;
        }

        if(corDosOlhos != "A" && corDoCabelo === "R" || corDoCabelo === "r"){
            ruivo ++;
        }
    }
    if(idadeQuantidade != 0){
        idadeMedia = idadeSoma/idadeQuantidade;
    }

    porcentagemOlhoAzul = olhoAzul/6 *100;

    resposta = `Pessoas com idade superior a 50 anos e peso inferior a 60Kg: ${idadeMaior50} <br>
    Média da idade das pessoas com altura inferior a 1.5 metros: ${idadeMedia} <br>
    Porcentagem de pessoas com olhos azuis: ${porcentagemOlhoAzul}% <br>
    Quantidade de pessoas ruivas que não possuem olhos azuis: ${ruivo}`
    
    document.getElementById("resposta").innerHTML = resposta;
}


function ex9(){

    let mediaIdade = 0;
    let somaIdade = 0;
    let pesoMaior90 = 0;
    let idade10 = 0;
    let porcentagemIdade10 = 0;

    for(let i = 1; i<=10; i++){
        const idade = prompt(`Insira a idade da ${i}º pessoa: `);
        const peso = prompt(`Insira o peso da ${i}º pessoa: `);
        const altura = prompt(`Insira a altura da ${i}º pessoa (Use . como separador decimal): `);

        somaIdade += idade;
        if(peso> 90 && altura < 1.5){
            pesoMaior90 ++;
        }

        if(idade>= 10 && idade <= 30 && altura > 1.9){
            idade10 ++;
        }
    }
    
    mediaIdade = somaIdade/10;
    
    porcentagemIdade10 = idade10/10 * 100;

    resposta = `Média das idades: ${mediaIdade} <br>
    Quantidade de pessoas com peso superior a 90Kg e altura inferior a 1.5 metros: ${pesoMaior90} <br>
    Porcentagem de pessoas com idade entre 10 e 30 anos e altura superior a 1.9 metros: ${porcentagemIdade10}%`
    
    document.getElementById("resposta").innerHTML = resposta;

}

function ex10(){
    let somaPar = 0;
    let somaPrimo = 0;
    let resposta = "";
    let flag = 0;

    for(let i = 1; i<=10; i++){
        const num = Number(prompt(`Digite um número qualquer: `));

        if(num % 2 === 0){
            somaPar += num;
        }

        for(let i = 2; i < num; i ++){
            if(num % i === 0){
                flag = 1;
                break;
            }
        }
        if(flag === 0){
            somaPrimo += num;
        }
        flag = 0;
    }

    resposta = `Soma dos números pares: ${somaPar} <br>
    Soma dos números primos: ${somaPrimo}`

    document.getElementById("resposta").innerHTML = resposta;
}