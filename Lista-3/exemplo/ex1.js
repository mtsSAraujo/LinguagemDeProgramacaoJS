function trocaOrdem(){

    let contador2 = 1;
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
        console.log(`Ordem crescente: ${a}, ${b}, ${c}, ${d}`);
        console.log(`Ordem decrescente: ${d}, ${c}, ${b}, ${a}`);
        contador2 ++;
    }

}