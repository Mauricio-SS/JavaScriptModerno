
const puntaje = 4000; 

//dos signos son para comparar 
//!: -> diferente a 
// if(puntaje =! 1000){
//     console.log('Es diferente');
// }else{
//     console.log('no es igual');
// }

// == operador no estricto 
// === operador estricto
//El comparador estricto compara el valor y el tipo de dato
if(puntaje === '1000'){
    console.log('Es igual');
}else{
    console.log('no es igual');
    console.log(` El tipo de dato de la variable puntaje es: ${typeof(puntaje)}`);
}