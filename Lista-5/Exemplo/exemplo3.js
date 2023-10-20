function votacao(){
    let partidos = []
    for(let i=0; i<5; i++){
        let partido = {
            codigo : Number(prompt(`Digite o código do partido: `)),
            nome: prompt(`Digite o nome do partido: `),
            sigla: prompt(`Digite a sigla do partido: `),
            presidente: prompt(`Digite o nome do presidente do partido: `),
            nPoliticos: Number(prompt(`Digite o número de políticos do partido: `))
        }
        while(partidos.some((item) => item.codigo == partido.codigo)){
            partido.codigo = Number(prompt(`Código já existente. Digite outro código: `))
        }
        partidos.push(partido)
    }
    let politicos = []
    for(i=0; i<5; i++){
        let politico = {
            partido: Number(prompt(`Digite o código do partido político: `)),
            nome: prompt(`Digite o nome do político: `),
            votos: 0,
            cargo: (prompt(`Digite o cargo do político: `))
        }
        while(!partidos.some((item) => item.codigo == politico.partido)){
            politico.partido = Number(prompt(`Partido inexistente. Digite outro partido: `))
        }
        politicos.push(politico)
    }

    let votos = []
    for(i=0; i<10; i++){
        let voto = {
            partido: Number(prompt(`Digite o código do partido político: `)),
            nome: prompt(`Digite o nome do político: `)
        }
        while(!politicos.some((item) => item.partido == voto.partido)){
            voto.partido = Number(prompt(`Partido inexistente. Digite outro partido: `))
        }
        while(!politicos.some((item) => item.nome == voto.nome)){
            voto.nome = prompt(`Nome inexistente. Digite outro nome: `)
        }
        votos.push(voto)
        console.log("Voto contabilizado!")
    }
}