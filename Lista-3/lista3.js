function ex2(){
    let preco = 5;
    let ingressos = 120;
    let despesas = 200;
    let lucro = (preco * ingressos) - despesas;

    while(preco>=1){
        console.log(`Valores: <br>
        preco: ${preco} <br>
        ingressos: ${ingressos} <br>
        despesas: ${despesas} <br>
        lucro: ${lucro}`);

        preco = preco - 0.5;
        ingressos = ingressos + 26;
        lucro = (preco * ingressos) - despesas;
    }
}