var senhau1 = "";
var senhau2 ="";


function Verificar(){
    senhau1 = document.getElementById('senha1').value;
    senhau2 = document.getElementById('senha2').value;

    if (senhau1 === senhau2){
        alert("As senhas são iguais")
    }
    else {
        alert("As senhas não correspondem!")
    }
}