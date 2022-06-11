var altura = "";
var peso = "";

function capturar(){
    
    altura = document.getElementById("altura").value;
    peso = document.getElementById("peso").value;
    altura = parseFloat(altura);
    peso = parseFloat(peso);
    var imc = peso / (altura * altura);
    imc = parseFloat(imc);
    if (imc < 18.5) {
        imc = "Abaixo do peso";
    } 
    if(imc > 18.5 && imc < 24.9) {
        imc = "Peso normal";
    }
    if(imc > 25 && imc < 29.9) {
        imc = "Sobrepeso";
    }
    if(imc > 30 && imc < 34.9) {
        imc = "Obesidade I";
    }
    if(imc > 35 && imc < 39.9) {
        imc = "Obesidade II";
    }
    if(imc > 40) {
        imc = "Obesidade III";
    }
    document.getElementById("valorcapturado").innerHTML = imc;
}