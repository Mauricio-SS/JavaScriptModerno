//Declaración de una función
//function Declarariom 

sumar();
function sumar(){
    console.log( 2 + 2);
};


//Expresion de función | function expression
//No se puede ejecutar antes de ser inicializada 
//Hoisting
const sumar2 = function(){
    console.log( 3 + 2);
    
}


sumar2();