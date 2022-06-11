var primos = [];
var t;

for(i=0; i<1000; i++){
    if (i != 1 && i % 1 == 0 && i % i == 0){
            t=i;  
            for(a=0;a<102;a++){
                primos[a] = t;
            }
        }
        
            
    }


// Professor eu tentei muito, mas n consegui.

console.log(primos[101]);