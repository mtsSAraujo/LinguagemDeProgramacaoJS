function prova(){
    let vetor = []
    for(let i =0; i<3; i++){
        let objeto={
            nome: prompt("Digite o nome do computador: ").toLowerCase(),
            estoque: Number(prompt("Digite a quantidade do computador em estoque: ")),
            classificacao: prompt("Infome a classificação do computador: \n (Gamer, Desktop ou Notebook)").toLowerCase()
        }
        while(objeto.estoque < 0){
            alert("Valor do produto em estoque menor que 0!")
            objeto.estoque = Number(prompt("Digite a quantidade do computador em estoque: "))
        }
        while(objeto.classificacao != "gamer" && objeto.classificacao != "desktop" && objeto.classificacao != "notebook"){
            alert("Digite uma classificação válida para o modelo informado!")
            objeto.classificacao = prompt("Infome a classificação do computador: \n (Gamer, Desktop ou Notebook)").toLowerCase()
        }
        vetor.push(objeto)
    }
}