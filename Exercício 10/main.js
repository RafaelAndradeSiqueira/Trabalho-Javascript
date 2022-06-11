mes = prompt("Digite um mês do ano:")


// OUTONO
if (mes == "Março" || mes == "março" || mes == "MARÇO" || mes == "Abril" || mes == "abril" || mes =="ABRIL" || mes == "Maio" || mes == "Maio" || mes =="MAIO" ) {
    alert(`${mes} é Outono!`)
}

//INVERNO
if (mes == "Junho" || mes == "junho" || mes == "JUNHO" || mes =="JULHO" || mes == "Julho" || mes == "julho" || mes =="Julho" || mes == "Agosto" || mes == "agosto" || mes =="AGOSTO") {
    alert(`${mes} é Inverno!`)
}

//PRIMAVERA
if (mes == "Setembro" || mes == "setembro" || mes =="SETEMBRO" || mes == "Outubro" || mes == "outubro" || mes == "OUTUBRO" || mes == "Novembro" || mes == "Novembro" || mes =="NOVEMBRO") {
    alert(`${mes} é Primavera!`)
}


//VERÃO
if (mes == "Dezembro" || mes == "dezembro" || mes =="DEZEMBRO" || mes == "Janeiro" || mes == "janeiro" || mes == "JANEIRO" || mes == "Fevereiro" || mes == "fevereiro"|| mes == "FEVEREIRO") {
    alert(`${mes} é Verão!`)
}

//NULO
if (mes == ""){
    alert("Por favor! Preencha o campo!")
}

