const num = 20;
const num2 = '20';
const num3 = 30;

//revisar si los números son iguales 
console.log(num == num3);
//true
console.log(num == num2);

//Comparador estricto, revisar si los números son iguales en valor y en tipo 
//false
console.log(num === num2);

//revisar que tipo de dato es una variable 
console.log( typeof num);
console.log( typeof num2);


//convertir strings a enteros 

console.log(num == Number.parseInt(num2));

//comparar si dos variables son diferentes
const pwd = 'admin';
const pwd2 = 'Admin';

console.log('Separador');

//true
console.log(pwd != pwd2);

console.log(num != num2);

//comparador estricto , tipo y valor 
//true
console.log(num !== num2);

