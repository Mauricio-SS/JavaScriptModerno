
let resultado; 

//pi 
resultado = Math.PI;

//redondear , 2.5 hacía abajo , 2.6 hacía arribe 

resultado = Math.round(2.4);
resultado = Math.round(2.6);

//redondear hacia arriba 
resultado = Math.ceil(2.1); 

//redondear hacia abajo 
resultado = Math.floor(2.9); 

//raíz cuadrada 
resultado = Math.sqrt(144);

//valor absoluto 
resultado = Math.abs(-500);

//potencia 
resultado = Math.pow(2 , 3);

//obtener el valor minimo 
resultado = Math.min(1,0,20,22,14,-5);

//obtener el valor máximo 
resultado = Math.max(1,0,20,22,14,-5);

//valor aleatorio , no recomendado 
// resultado = Math.random() * 20;

// Aleatorio dentro de un rango 
resultado = Math.floor(Math.random()*30);




console.log(resultado);