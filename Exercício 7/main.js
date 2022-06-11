var soma1 =0;
var soma2 =0;
var somafinal ="";

for(i=0;i<150;i++){
    if(i % 3 == 0 ){
        i = parseInt(i);
        soma1 = parseInt(soma1);
        soma1 = soma1 + i;
        soma1 = parseInt(soma1);

    }
    if(i % 5 == 0 ){
        i = parseInt(i);
        soma2 = parseInt(soma2);
        soma2 = soma2 + i;
        soma2 = parseInt(soma2);
    }
    
}

somafinal = soma1 + soma2;

console.log(somafinal);