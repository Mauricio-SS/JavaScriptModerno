
let i = 1 //inicio

do{
    let multlo3 = i % 3;
    let multlo5 = i % 5; 

    if(multlo3 == 0 && multlo5 == 0){
        console.log(`${i} FIZZBUZZ`); 
    }else if(multlo3 == 0){
        console.log(`${i} FIZZ`); 
    }
    else if(multlo5 == 0){
        console.log(`${i} BUZZ`); 
    }else {
        console.log(`${i} `); 

    }

    i++; //iincremento 
}while(i < 100)