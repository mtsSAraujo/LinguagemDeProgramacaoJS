function cadastrarCarros(carros, notas) {
    for (let i = 0; i < 4; i++) {
        let carro = {
            marca: prompt("Digite a marca do carro: "),
            modelo: prompt("Digite o modelo do carro: "),
            ano: Number(prompt("Digite o ano do carro: ")),
            valor: Number(prompt("Digite o valor do carro: "))
        };
        carros.push(carro);

        let avaliacoes = [];
        let nota = 0;
        for (let j = 0; j < 5; j++) {
            nota = Number(prompt(`Digite a nota do carro ${i + 1} na avaliação ${j + 1}: `));
            avaliacoes.push(nota);
        }
        notas.push(avaliacoes);
    }
    console.log("Carros cadastrados com sucesso!");
    console.log(carros, notas)
}

function calcularMediaNotas(carros, notas) {
    console.log(`Média de notas dos carros:`)
    for (let i = 0; i < carros.length; i++) {
        let soma = 0;
        for (let j = 0; j < notas[i].length; j++) {
            soma += notas[i][j];
        }
        let media = soma / notas[i].length;
        console.log(`Carro ${i + 1}: Marca: ${carros[i].marca}  Modelo: ${carros[i].modelo} - Média de notas: ${media}`);
    }
}

function calcularMenorNotaPorAvaliacao(carros, notas) {
    for (let i = 0; i < notas[0].length; i++) {
        let menorNota = notas[0][i];
        let modeloCarroMenorNota = carros[0].modelo;
        for (let j = 1; j < notas.length; j++) {
            if (notas[j][i] < menorNota) {
                menorNota = notas[j][i];
                modeloCarroMenorNota = carros[j].modelo;
            }
        }
        console.log(`Menor nota na avaliação ${i + 1}: Modelo: ${modeloCarroMenorNota}`);
    }
}

function calcularMenorMediaAvaliacao(notas) {
    let menorMedia = Number.MAX_VALUE;
    let menorMediaIndex = -1;
    for (let i = 0; i < notas.length; i++) {
        let soma = 0;
        for (let j = 0; j < notas[i].length; j++) {
            soma += notas[i][j];
        }
        let media = soma / notas[i].length;
        if (media < menorMedia) {
            menorMedia = media;
            menorMediaIndex = i;
        }
    }
    console.log(`Avaliação com menor média é a: ${menorMediaIndex + 1}º`);
}

function menu() {
    let carros = [];
    let notas = [];
    let opcao;
    do {
        console.log("===== MENU =====");
        console.log("1) Cadastrar carros");
        console.log("2) Calcular média de notas");
        console.log("3) Calcular modelo do carro com menor nota em cada avaliação");
        console.log("4) Calcular avaliação com menor média");
        console.log("0) Sair");
        opcao = Number(prompt("Digite a opção desejada: "));

        switch (opcao) {
            case 1:
                cadastrarCarros(carros, notas);
                break;
            case 2:
                calcularMediaNotas(carros, notas);
                break;
            case 3:
                calcularMenorNotaPorAvaliacao(carros, notas);
                break;
            case 4:
                calcularMenorMediaAvaliacao(notas);
                break;
            case 0:
                console.log("Programa encerrado.");
                break;
            default:
                console.log("Opção inválida. Digite novamente.");
                break;
        }
    } while (opcao !== 0);
}

menu();