function ex15(){
    let investimento = Number(document.getElementById("ex15n1").value);
    let escolha = Number(document.getElementById("escolha").value);

    switch(escolha){
        case 1:
            investimento = investimento + investimento * 0.03;
            document.getElementById("resposta").innerHTML =
            `O novo valor com rendimento mensal do investimento é de:
             R$${investimento.toFixed(2)}`;
            break;
        
        case 2:
            investimento = investimento + investimento * 0.04;
            document.getElementById("resposta").innerHTML =
            `O novo valor com rendimento mensal do investimento é de:
             R$${investimento.toFixed(2)}`;
            break;

    }

    if (escolha == null){
        document.getElementById("resposta").innerHTML = 
        `Escolha uma opção para continuar`
    }
}
function ex16(){
    let precoAtual = Number(document.getElementById("ex16n1").value);
    let descP = 0;
    let novoPreco = 0;

    if (precoAtual <= 30 && precoAtual >= 0){
        descP = 0;
    } else if (precoAtual > 30 && precoAtual < 100){
        descP = precoAtual * 0.10;
    } else if (precoAtual >= 100){
        descP = precoAtual * 0.15;
    } else {
        alert(`Preço invalido`)
        return
    }
    novoPreco = precoAtual - descP;
    document.getElementById("desconto").innerHTML = `Valor do desconto: ${descP}`;
    document.getElementById("novoPreco").innerHTML = `Novo preço: ${novoPreco}`;
}
function ex17(){
    let respSenha = document.getElementById("senha").value;
    let senha = "4531";
    if (respSenha == senha){
        alert(`Acesso concedido`);
    } else {
        alert(`Acesso negado`);
    }
}

function ex18(){
    let idade = Number(document.getElementById("ex18n1").value);
    let resposta;
    if (idade >= 18){
        resposta = "Voce é maior de idade";
    } else if (idade >= 0 && idade < 18 ){
        resposta = "Voce é menor de idade";
    } else {
        alert(`Idade invalida`);
        resposta = "";
    }
    document.getElementById("verificar").innerHTML = `${resposta}`;
}
function ex19(){
    let altura = Number(document.getElementById("ex19n1").value);
    let sexo = document.getElementById("ex19n2").value;
    let ideal = 0;
    
    if(altura >= 0){
        switch (sexo){
            case "F":
                ideal = (62.1 * altura) - 44.7;
                break
            case "M":
                ideal = (72.7 * altura) - 58;
                break
            default:
                alert(`Opção invalida`);
        }
        document.getElementById("pesoIdeal").innerHTML = `O peso ideal: ${ideal.toFixed(2)}`;
    } else {
        alert(`Altura invalida`);
        document.getElementById("pesoIdeal").innerHTML = `Altura invalida`;
    }
}

function ex20(){
    let idade = Number(document.getElementById("ex20n1").value);
    let categoria;
    if(idade > 4){
        if (idade >= 5 && idade <= 7){
            categoria = "Infantil";
        }else if (idade >= 8 && idade <= 10){
            categoria = "Juvenil";
        }else if (idade >= 11 && idade <= 15){
            categoria = "Adolescente";
        }else if (idade >= 16 && idade <= 30){
            categoria = "Adulto";
        }else if (idade > 30){
            categoria = "Senior";
        }
    } else {
        alert(`Idade invalida`);
        document.getElementById("categoria").innerHTML = `Idade invalida`;
        return
    }
    document.getElementById("categoria").innerHTML = `Categoria: ${categoria}`;
}

function ex21(){
    let preco = Number(document.getElementById("ex21n1").value);
    let codigo = Number(document.getElementById("ex21n2").value);
    let procedencia;

    if(codigo > 0 && codigo <= 30){
        if(codigo == 1){
            procedencia = "Sul";
        } else if(codigo == 2){
            procedencia = "Norte";
        } else if(codigo == 3){
            procedencia = "Leste";
        } else if(codigo == 4){
            procedencia = "Oeste";
        } else if(codigo == 5 || codigo == 6){
            procedencia = "Nordeste";
        } else if(codigo >= 7 && codigo <= 9){
            procedencia = "Sudeste";
        } else if(codigo >= 10 && codigo <= 20){
            procedencia = "Centro-Oeste";
        } else if(codigo >= 21 && codigo <= 30){
            procedencia = "Nordeste";
        }
    } else {
        alert(`Código invalido`)
        document.getElementById("procedencia").innerHTML = `Codigo invalida`;
        return
    }
    document.getElementById("procedencia").innerHTML = `Procedencia: ${procedencia}`;
}

function ex22(){
    let anos = Number(document.getElementById("ex22n1").value);
    let peso = Number(document.getElementById("ex22n2").value);
    let risco = 0;
    let flag = 0;

    if(anos >= 1 && anos<20){
        if(peso>0 && peso<60){
            risco = 9;
        }
        else if(peso>=60 && peso <=90){
            risco = 8;
        }
        else if(peso>90){
            risco = 7;
        }
        else{
            risco = 0;
        }
    }
    else if(anos>=20 && anos <= 50){
        if(peso>0 && peso<60){
            risco = 6;
        }
        else if(peso>=60 && peso <=90){
            risco = 5;
        }
        else if(peso>90){
            risco = 4;
        }
        else{
            risco = 0;
        }

    }
    else if(anos>50){
        if(peso>0 && peso<60){
            risco = 3;
        }
        else if(peso>=60 && peso <=90){
            risco = 2;
        }
        else if(peso>90){
            risco = 1;
        }
        else{
            risco = 0;
        }

    }
    else{
        document.getElementById("resposta").innerHTML =
        `Insira uma idade maior do que 0!`
        flag = 1;
    }

    if(risco == 0 && flag == 0){
        document.getElementById("resposta").innerHTML =
        `Insira um peso maior do que 0!`
    }
    else if(flag == 0){
        document.getElementById("resposta").innerHTML =
        `Você se encontra no grupo de risco ${risco}`;
    }
}

function ex23(){
    let quantidade = Number(document.getElementById("ex23n1").value);
    let codigo = Number(document.getElementById("ex23n2").value);
    let controle = 0;
    let precoUnitario = 0;
    let precoTotal = 0;
    let desconto = 0;
    let precoFinal = 0;
    let controle2 = 0

    if(codigo>=1 && codigo <=10){
        precoUnitario = 10;
    }
    else if(codigo>= 11 && codigo <= 20){
        precoUnitario = 15;
    }
    else if(codigo>=21 && codigo <=30){
        precoUnitario = 20;
    }
    else if(codigo>=31 && codigo <=40){
        precoUnitario = 30;
    }
    else if(codigo <= 0){
        controle = 1;
    }
    else{
        controle = 2;
    }

    if(controle == 0 && quantidade >= 0){
        precoTotal = precoUnitario * quantidade;
    }
    else{
        controle = 1;
    }

    if(controle == 0){
        controle2 = 1;
        if(precoTotal <= 250){
            desconto = 0.05;
        }
        else if(precoTotal > 250 && precoTotal <=500){
            desconto = 0.10;
        }
        else if(precoTotal>500){
            desconto = 0.15;
        }
    }
    else if(controle == 1){
        document.getElementById("resposta").innerHTML =
        `codigo ou quantidade do produto menor ou igual a 0!`
    }
    else{
        document.getElementById("resposta").innerHTML =
        `codigo do produto maior que 40!`
    }

    precoFinal = precoTotal - precoTotal * desconto;

    if(controle2 == 1){
        document.getElementById("resposta").innerHTML =
        `O preço unitario do produto é: ${precoUnitario.toFixed(2)} <br>
        O preço total da nota é: ${precoTotal.toFixed(2)} <br>
        O desconto do produto é: ${desconto * 100}%<br>
        O preço final do produto é: ${precoFinal.toFixed(2)}<br>`
    }
}

function ex24(){
    let preco = Number(document.getElementById("ex24n1").value);
    let escolhaCategoria = Number(document.getElementById("escolhaCategoria").value);
    let escolhaSituacao = document.getElementById("escolhaSituacao").value;
    let aumento = 0;
    let imposto = 0;
    let novoPreco = 0;
    let classificacao = null;

    if(preco <= 25 && preco >=0){
        switch(escolhaCategoria){
            case 1:
                aumento = 0.05;
                break;

            case 2:
                aumento = 0.08;
                break;
            
            case 3:
                aumento = 0.10;
                break;
        }
    }
    else if(preco >25){
        switch(escolhaCategoria){
            case 1:
                aumento = 0.12;
                break;

            case 2:
                aumento = 0.15;
                break;
            
            case 3:
                aumento = 0.18;
                break;
        }
    }
    else{
        document.getElementById("resposta").innerHTML =
        `Preço digitado menor que 0!`
    }

    if(escolhaSituacao == "R" || escolhaCategoria == 2){
        imposto = 0.05;
    }
    else{
        imposto = 0.08;
    }

    if(aumento > 0){
        novoPreco = preco +(preco * aumento) + (preco * imposto);
    }

    if(novoPreco <= 50 && novoPreco > 0){
        classificacao = "Barato";
    }
    else if(novoPreco > 50 && novoPreco < 120){
        classificacao = "Normal";
    }  
    else{
        classificacao = "Caro";
    }

    if(aumento > 0){
        document.getElementById("resposta").innerHTML =
        `O valor do aumento é de: ${aumento}; <br>
        O valor do imposto é de: ${imposto}; <br>
        O novo preço do produto é de: ${novoPreco}; <br>
        A classificação do produto é: ${classificacao}.`
    }

}

function ex25(){
    let horasExtras = Number(document.getElementById("ex25n1").value);
    let horasPerdidas = Number(document.getElementById("ex25n2").value);
    let controle = 0
    let horas = 0;
    let minutos = 0;
    let premio = 0;


    if(horasExtras <0 || horasPerdidas <0){
        controle = 1;
    }

    if(controle == 0){
        horas = horasExtras -((2/3) * horasPerdidas);
        minutos = horas * 60
        if(minutos >= 2400){
            premio = 500;
        }
        else if(minutos >= 1800 && minutos <2400){
            premio = 400;
        }
        else if(minutos >= 1200 && minutos <1800){
            premio = 300;
        }
        else if (minutos >= 600 && minutos < 1200){
            premio = 200;
        }
        else{
            premio = 100;
        }
    }

    if(premio > 0){
        document.getElementById("resposta").innerHTML =
        `O valor do premio do funcionário é de: R$${premio}`
    }
    else{
        document.getElementById("resposta").innerHTML =
        `O número de horas nao pode ser negativo!`
    }

}