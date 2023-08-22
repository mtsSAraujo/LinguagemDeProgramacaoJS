function exemplo(){
    let escolha = Number(document.getElementById("escolha").value);
    let n1 = Number(document.getElementById("exemploN1").value);
    let n2 = Number(document.getElementById("exemploN2").value);

    switch(escolha){
        case 1: alert(`Média entre os números digitados`);
            let media = (n1+n2)/2;
            document.getElementById("resposta").innerHTML = `A média entre os
            dois números é: ${media.toFixed(2)}`;

            break;
        case 2: alert(`Diferença do maior pelo menor`);
            let diferenca = 0;
            if(n1>n2){
                diferenca = n1 - n2;
            }
            else{
                diferenca = n2 -n1;
            }
            document.getElementById("resposta").innerHTML = `A diferença do maior
            número pelo menor é: ${diferenca}`;

            break;
        case 3: alert(`Produto entre os números digitados`);
            let produto = n1 * n2;
            document.getElementById("resposta").innerHTML = `O produto entre os
            números digitados é: ${produto}`;

            break;
        case 4: alert(`Divisão do primeiro pelo segundo`);
            if(n2 == 0){
                document.getElementById("resposta").innerHTML = `O segundo número nao pode ser 0, nao existe divisão por 0`;
            }
            else{
                let divisao = n1/n2;
                document.getElementById("resposta").innerHTML = `A divisão do primeiro 
                pelo segundo é igual a: ${divisao.toFixed(2)}`;
            }

            break;

        default:
            document.getElementById("resposta").innerHTML = `Opção digitada Inválida`;
            break;
    }
}