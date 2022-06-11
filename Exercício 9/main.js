var palavra = prompt("Digite uma palavra");
var v = []

for(var i=palavra.length-1; i>=0; i--){
  v[i] = palavra.charAt(i)
}

v.reverse();



alert(v)