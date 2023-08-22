function ex1(){

    let n1 = document.getElementById("ex1N1").value;
    let n2 = document.getElementById("ex1N2").value;
    let sub = n1 - n2;
    document.getElementById("resposta").innerHTML = `O resultado é: ${sub.toFixed(2)}`

}

function ex2(){

    let n1 = document.getElementById("ex2N1").value;
    let n2 = document.getElementById("ex2N2").value;
    let n3 = document.getElementById("ex2N3").value;
    let multiplica = n1 *n2 *n3;
    document.getElementById("resposta").innerHTML = `O resultado é: ${multiplica.toFixed(2)}`
}

function ex3(){

    let n1 = document.getElementById("ex3N1").value;
    let n2 = document.getElementById("ex3N2").value;
    let div = n1/n2;
    document.getElementById("resposta").innerHTML = `O resultado é: ${div.toFixed(2)}`

}

function ex4(){
    let n1 = document.getElementById("ex4N1").value;
    let n2 = document.getElementById("ex4N2").value;
    let media = ((n1*2) + (n2*3))/5
    document.getElementById("resposta").innerHTML = `O resultado é: ${media.toFixed(2)}`

}

function ex5(){

    let n1 = document.getElementById("ex5N1").value;
    let desconto = n1*0.1
    let final = n1 - desconto
    document.getElementById("resposta").innerHTML = `O resultado é: ${final.toFixed(2)}`
}

function ex6(){
    let sal = parseFloat(document.getElementById("ex6N1").value);
    let vendas = parseFloat(document.getElementById("ex6N2").value);
    let comissao = vendas * 0.04;
    let sal_final = parseFloat(sal+comissao);
    document.getElementById("resposta").innerHTML = `O salário final é: ${sal_final.toFixed(2)} <br>
    e o valor da comissão é: ${comissao.toFixed(2)}`;

}

function ex7(){
    let peso = parseFloat(document.getElementById("ex7N1").value);
    let pesoMais = parseFloat(peso + 0.15*peso);
    let pesoMenos = parseFloat(peso - 0.2*peso);
    document.getElementById("resposta").innerHTML = `O novo peso ao engordar é de: ${pesoMais.toFixed(2)} <br>
    O novo peso ao emagrecer é de: ${pesoMenos.toFixed(2)}`

}

function ex8(){
    let peso = parseFloat(document.getElementById("ex8N1").value);
    let pesoGramas = peso * 1000
    document.getElementById("resposta").innerHTML = `O seu peso em gramas é: ${pesoGramas.toFixed(2)}`
}

function ex9(){
    let bMaior = parseFloat(document.getElementById("ex9N1").value);
    let bMenor = parseFloat(document.getElementById("ex9N2").value);
    let altura = parseFloat(document.getElementById("ex9N3").value);
    let area = ((bMaior+bMenor) * altura)/2
    document.getElementById("resposta").innerHTML = `A área do trapézio é de: ${area.toFixed(2)}`

}

function ex10(){
    let lado = parseFloat(document.getElementById("ex10N1").value);
    let area = lado**2
    document.getElementById("resposta").innerHTML = `A área do quadrado é de: ${area.toFixed(2)}`

}

function ex11(){
    let dMaior = parseFloat(document.getElementById("ex11N1").value);
    let dMenor = parseFloat(document.getElementById("ex11N2").value);
    let area = (dMaior*dMenor)/2;
    document.getElementById("resposta").innerHTML = `A área do losango é de: ${area.toFixed(2)}`

}

function ex12(){
    let salMin = parseFloat(document.getElementById("ex12N1").value);
    let sal = parseFloat(document.getElementById("ex12N2").value);
    let qntSal = sal/salMin
    document.getElementById("resposta").innerHTML = `A quantidade de salarios minimos recebida é de:
     ${qntSal.toFixed(2)}`

}

function ex13(){
    let number = parseFloat(document.getElementById("ex13N1").value);
    let resultado = 0;
    let resultadoString = null;
    let concatena = null;
    for(i=0; i<11; i++){
        resultado = number * i
        resultadoString = `${number} x ${i} = ${resultado} <br>`
        if(concatena == null){
            concatena = resultadoString
        }
        else{
            concatena += resultadoString
        }
    }
    document.getElementById("resposta").innerHTML = concatena
}
function ex14(){
    let anoNascimento = Number(document.getElementById("ex14N1").value);
    let anoAtual = Number(document.getElementById("ex14N2").value);
    let idadeAnos = anoAtual - anoNascimento;
    let idadeMeses = idadeAnos * 12;
    let idadeSemanas = idadeMeses * 4;
    let idadeDias = idadeAnos * 365;

    for(i=idadeAnos; i >= 4; i -=4){
        idadeDias = idadeDias + 1;
    }

    let respostaString = `a idade em anos é: ${idadeAnos}; <br>
    a idade em meses é: ${idadeMeses}; <br>
    a idade em semanas é: ${idadeSemanas}; <br>
    a idade em dias é: ${idadeDias}; `;
    
    document.getElementById("resposta").innerHTML = respostaString;

}

function ex20(){
    let angulo = Number(document.getElementById("ex20N1").value);
    let catAdjacente = Number(document.getElementById("ex20N2").value);
    angulo = (angulo * Math.PI)/180;
    let hipotenusa = catAdjacente/Math.cos(angulo);
    document.getElementById("resposta").innerHTML = `O valor da medida da escada é de: ${hipotenusa.toFixed(2)}`;
}
