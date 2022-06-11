var n1 = prompt("Digite um número:");
var n2 = prompt("Digite outro número:");
if (n2 > n1) {
    varnum = n2;
} else {
    varnum = n1;
}
var n3 = prompt("Digite mais um número:");
if (n3 > varnum) {
    varnum = n3
}

alert(`O maior número é ${varnum}`);

