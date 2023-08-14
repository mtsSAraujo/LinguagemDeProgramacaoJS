function calcular(){
    //Recuperar valor do peso digitado pelo usuário
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso / (altura**2);
    // Concatenando String
    // alert("O IMC calculado foi: "+ imc);
    // Template string
    if(peso<=0 || altura<=0){
        alert("Peso e altura devem ser maiores que 0!")
    }
    else{
        document.getElementById("imc").innerHTML = imc.toFixed(2)
        //alert(`O seu IMC é de ${imc.toFixed(2)}`)
    }
}