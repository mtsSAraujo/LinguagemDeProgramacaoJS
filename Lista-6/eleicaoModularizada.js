function cadastraPartido(partidos) {
    let partido = {
        codigo: Number(prompt(`Digite o código do partido: `)),
        nome: prompt(`Digite o nome do partido: `).toLowerCase(),
        sigla: prompt(`Digite a sigla do partido: `).toUpperCase(),
        presidente: prompt(`Digite o nome do presidente do partido: `).toLowerCase(),
        nPoliticos: Number(prompt(`Digite o número de políticos do partido: `))
    }
    while (partidos.some((item) => item.codigo == partido.codigo)) {
        partido.codigo = Number(prompt(`Código já existente. Digite outro código: `))
    }
    partidos.push(partido)
    console.log("Partido cadastrado com sucesso!")
}

function cadastraPolitico(partidos, politicos) {
    console.log(partidos)
    let politico = {
        partido: Number(prompt(`Digite o código do partido político: `)),
        nome: prompt(`Digite o nome do político: `).toLowerCase(),
        votos: 0,
        cargo: prompt(`Digite o cargo do político: `).toLowerCase()
    }
    while (!partidos.some((item) => item.codigo == politico.partido)) {
        politico.partido = Number(prompt(`Partido inexistente. Digite outro partido: `))
    }
    politicos.push(politico)
    console.log("Politico cadastrado com sucesso!")
}

function votacao(politicos, votos) {
    console.log(politicos)
    let voto = {
        partido: Number(prompt(`Digite o código do partido político: `)),
        nome: prompt(`Digite o nome do político: `).toLowerCase()
    }
    while (!politicos.some((item) => item.partido == voto.partido)) {
        voto.partido = Number(prompt(`Partido inexistente. Digite outro partido: `))
    }
    while (!politicos.some((item) => item.nome == voto.nome)) {
        voto.nome = prompt(`Nome inexistente. Digite outro nome: `).toLowerCase()
    }
    votos.push(voto)
    console.log("Voto Registrado!")
}

function contabilizaVotos(politicos, votos){
    let indexPolitico
    console.log(votos)
    console.log(politicos)
    for(let i=0; i<votos.length; i++){
        if(politicos.some((item) => item.partido == votos[i].partido && item.nome == votos[i].nome)){
            indexPolitico = politicos.findIndex(((item) => item.partido == votos[i].partido && item.nome == votos[i].nome))
            politicos[indexPolitico].votos += 1
            console.log("Voto contabilizado!")
        }
    }
    console.log("Votos contabilizados! Votação encerrada!")
}

function main() {
    let partidos = []
    let politicos = []
    let votos = []
    let opcao
    do {
        opcao = Number(prompt("Digite uma das opções: \n1 - Cadastrar partido; \n2- Cadastrar político; \n3 - Votar; \n4 - Contabilizar votos; \n0 - Sair do programa."))
        switch(opcao){
            case 1: cadastraPartido(partidos)
                break
            
            case 2: cadastraPolitico(partidos, politicos)
                break
            
            case 3: votacao(politicos, votos)
                break
            
            case 4: contabilizaVotos(politicos, votos)
                break
            
            case 0: break

            default: console.log("Opção digitada inválida! Digite uma opção válida")
                break
        }
    } while (opcao != 0)
    console.log(politicos)
}