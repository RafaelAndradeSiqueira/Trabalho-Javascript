var capturando = "";

function Verificar(){
    capturando = document.getElementById('valor').value;
    if (capturando == ""){
        alert("O campo está vazio!")
    }
    else {
        alert("Campo verificado e aprovado!")
    } 
}