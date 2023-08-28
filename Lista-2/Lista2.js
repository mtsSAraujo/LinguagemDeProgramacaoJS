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